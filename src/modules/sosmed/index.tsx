"use client";


import { BorderBeam } from "@/common/components/ui/border-beam";
import { ShootingStars } from "@/common/components/ui/shooting-start";
import { Sosmeds } from "@/common/constant/sosmed";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3, // Stagger children by .3 seconds
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
};

export default function Sosmed() {
    return (
        <section className="mx-auto flex min-h-screen w-full max-w-md items-center px-4 pt-16 ">
            <div className="relative flex h-full w-full flex-col gap-2 rounded-xl shadow-lg shadow-neutral-800 border-t border-slate-800 backdrop-blur-lg bg-opacity-90">
                {/* <div className="absolute h-28 w-full overflow-hidden rounded-t-xl bg-neutral-400">
                    <div className="h-full w-full backdrop-blur-sm"></div>
                </div> */}
                <BorderBeam
                    size={500}
                    duration={12}
                    delay={9}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: 'easeInOut',
                    }}
                    className="z-10 flex flex-col items-center gap-4 px-10 pb-10 pt-16">
                    <Image
                        src="/profile.jpg"
                        alt="icon"
                        width="100"
                        height="100"
                        className="rounded-full border-[2px] border-gray-500"
                        priority
                    />
                    <div className="flex flex-col items-center">
                        <span className="mx-auto text-xl font-normal">
                            WahabArf
                        </span>
                        <span className="opacity-70">
                            Indonesia - Semarang
                        </span>

                        <span className="text-center mt-4 underline underline-offset-8">
                            Frontend Developer
                        </span>
                    </div>
                </motion.div>
                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    variants={list}
                    className="flex flex-col gap-4 px-7 pb-7"
                >
                    {Sosmeds.map(
                        (sosmed, idx) => (
                            <motion.li
                                whileHover={{
                                    scale: 1.1,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                key={idx}
                                variants={item}
                                className="w-64 justify-center items-center mx-auto flex"
                            >
                                <Link
                                    href={
                                        sosmed.UrlDirec
                                    }
                                    target="_blank"
                                    className="flex w-full items-center justify-center gap-2 rounded-md  py-2 shadow-xl duration-200 hover:border-b-8 hover:opacity-70 dark:text-white/65 transform-gpu dark:bg-dark dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                                >
                                    <span className="mr-2">
                                        {sosmed.SvgIcon()}
                                    </span>
                                    <h1 className="text-lg font-semibold">
                                        {
                                            sosmed.title
                                        }
                                    </h1>
                                </Link>
                            </motion.li>
                        )
                    )}
                </motion.ul>
            </div>

            <div className="fixed -left-10 -top-10 -z-20 h-[18%] w-[80%] -rotate-12 bg-gradient-to-r from-light to-lighter rounded-lg blur-[150px]" />
            <div className="fixed top-0 z-50 w-[100%] h-screen translate-x-[100%] bg-black animate-slide-in-out" />
            <ShootingStars />
        </section>
    );
}
