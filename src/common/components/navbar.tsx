"use client";

import { ContainerContext } from "@/context/ContainerProvider";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, {
    useContext,
    useState,
} from "react";
import { RxMoon, RxSun } from "react-icons/rx";
import { METADATA } from "../constant/metadata";
import { Menu } from "../constant/menu";

export default function Navbar() {
    const { fullPathName, setFullPathName } =
        useContext(ContainerContext);
    const { theme, setTheme } = useTheme();
    const [navToggle, setNavToggle] =
        useState(false);

    function handleMobileNav(
        value: boolean,
        section?: string
    ) {
        setNavToggle(value);
        if (section) setFullPathName(section);
    }

    return (
        <nav className="fixed z-50 h-0 w-screen dark:text-neutral-300">
            {/* dark mode */}
            <label
                htmlFor="dark"
                className="absolute right-28 top-6 cursor-pointer"
            >
                <div className="absolute flex cursor-pointer items-center gap-2 duration-500 ease-in-out dark:-translate-y-14">
                    <span className="text-light">
                        Light
                    </span>
                    <RxSun className="w-6 h-6" />
                </div>
                <div className="absolute flex -translate-y-14 cursor-pointer items-center gap-2 duration-300 dark:translate-y-0">
                    <span className="text-white">
                        Dark
                    </span>
                    <RxMoon className="w-6 h-6" />
                </div>
            </label>
            <input
                type="checkbox"
                id="dark"
                className="hidden"
                onClick={() =>
                    setTheme(
                        theme === "light"
                            ? "dark"
                            : "light"
                    )
                }
            />

            {/* sidebar */}
            <button className="animate-readmore absolute left-20 top-4 -z-[1] flex items-center rounded-md bg-white px-4 py-2 text-neutral-700 shadow-xl duration-300 hover:opacity-70">
                <div className="-left-3 -z-[1] h-0 w-0 rotate-[135deg] border-[15px] border-solid border-white border-l-transparent border-t-transparent absolute"></div>
                <span className="font-medium text-light dark:text-dark">
                    Read More..
                </span>
            </button>

            {/* Show Sidebar Button */}
            <input
                type="submit"
                id="navbar"
                hidden
                onClick={() =>
                    handleMobileNav(!navToggle)
                }
            />
            <label
                htmlFor="navbar"
                className={`absolute top-5 z-10 rounded-md cursor-pointer duration-300 ${navToggle ? "left-64 rotate-180 md:left-[350px]" : "left-5 rotate-0"}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-light dark:text-white"
                >
                    <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                    ></path>
                    <path d="M7 7l5 5l-5 5"></path>
                    <path d="M13 7l5 5l-5 5"></path>
                </svg>
            </label>
            {navToggle ? (
                <div
                    onClick={() =>
                        setNavToggle(false)
                    }
                    className="absolute left-0 top-0 h-screen w-screen bg-background opacity-50 dark:bg-dark"
                ></div>
            ) : (
                ""
            )}
            <ul
                className={`absolute top-0 flex h-screen w-80 flex-col bg-transparent backdrop-blur-xl duration-300 md:w-[400px] ${navToggle ? "left-0" : "-left-full"}`}
            >
                <li>
                    <Link
                        href="/"
                        onClick={() =>
                            handleMobileNav(
                                false,
                                " "
                            )
                        }
                        className="mx-[10%] mt-12 flex h-fit items-center gap-3 border-b border-stone-400 py-5"
                    >
                        <div className="relative">
                            <Image
                                src="/profile.jpg"
                                alt="wahab"
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                            <div className="absolute right-1 top-1 h-5 w-5 rounded-full bg-green-500">
                                <div className="h-full w-full animate-ping rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-light dark:text-neutral-400 text-4xl font-bold">
                                {METADATA.creator}
                            </h2>
                            <span className="text-sm font-medium text-neutral-500">
                                Frontend Website
                                Developer
                            </span>
                            <div className="mt-2 flex flex-wrap gap-2 font-medium text-neutral-500">
                                <span className="rounded-bl-lg rounded-tr-lg border border-neutral-700 bg-transparent bg-white px-3 text-sm text-neutral-700">
                                    Freelancer
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="mx-[5%] my-4 flex flex-col gap-5">
                    {Menu.map(
                        (
                            menu: any,
                            index: number
                        ) => (
                            <div key={index}>
                                {navLink(
                                    menu,
                                    handleMobileNav,
                                    fullPathName
                                )}
                            </div>
                        )
                    )}
                </li>
            </ul>
        </nav>
    );
}

const navLink = (
    menu: any,
    handle: any,
    fullPathName: string
) => (
    <Link
        href={menu.pathName}
        onClick={() =>
            handle(false, menu.pathName)
        }
        className={`flex w-full items-center gap-2 rounded-xl px-[5%] py-3 duration-300 hover:scale-105 hover:px-14 ${fullPathName == menu.pathName
            ? // ul link
            "bg-light dark:bg-darker text-white"
            : "hover:bg-none hover:text-lighter hover:dark:bg-blur text-lighter dark:text-neutral-400"
            }`}
    >
        <menu.Svg
            className="h-7 w-7"
            strokeWidth="1"
        />{" "}
        {menu.label}
    </Link>
);
