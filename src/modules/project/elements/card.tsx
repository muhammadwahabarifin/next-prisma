"use client";

import { PROJECTS } from "@/common/constant/works";
import { motion } from "framer-motion";
import Image from "next/image";
import { TbWorldShare } from "react-icons/tb";

const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};
const sectionListVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export default function ProjectCard() {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={sectionVariants}
            className="mx-4 my-20 grid items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
            {PROJECTS.slice(0, 5).map(
                (project: any, index: number) => (
                    <motion.div
                        variants={
                            sectionListVariants
                        }
                        key={index}
                    >
                        <div
                            className=" w-full h-auto border border-stone-300 rounded-xl relative scale-70 flex flex-col bg-[#eef4f7] dark:bg-dark dark:border-darkter dark:shadow-darkter/25 dark:shadow-md shadow-sm shadow-neutral-400 "
                        >
                            <a
                                className="absolute right-0 flex items-center gap-2 rounded-bl-xl rounded-tr-xl bg-white px-7 py-1 text-black"
                                href={
                                    project.urlDirect
                                }
                                target="_blank"
                            >
                                <span>
                                    Live Site
                                </span>
                                <TbWorldShare className="h-5 w-5 animate-bounce" />
                            </a>
                            <Image
                                src={
                                    project.srcImage
                                }
                                alt="project"
                                className="w-full object-cover rounded-lg object-center"
                                width="100"
                                height="100"
                                sizes="100vw"
                            />

                            <div className="p-4">
                                <h3 className="mb-4 text-xl font-semibold text-light dark:text-neutral-400">
                                    {
                                        project.title
                                    }
                                </h3>
                                <p className="mb-2 text-base text-lighter dark:text-darkter">
                                    {
                                        project.description
                                    }
                                </p>
                                <ul className="flex flex-wrap gap-2 py-2">
                                    {project.logos.map(
                                        (
                                            logos: any,
                                            index_: number
                                        ) => (
                                            <li
                                                key={
                                                    index_
                                                }
                                                className="rounded-md border-neutral-300 bg-lighter dark:bg-light bg-opacity-80 px-2 py-px backdrop-blur-md dark:text-white text-neutral-200"
                                            >
                                                {
                                                    logos.desc
                                                }
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <ul className="flex h-full flex-wrap items-start gap-3 justify-self-start px-4 pb-4">
                                {project.icons.map(
                                    (
                                        icon: any,
                                        index_: number
                                    ) => (
                                        <li
                                            key={
                                                index_
                                            }
                                            className="tooltip before:bg-neutral-200 before:text-neutral-700 before:content-[attr(data-tooltip)] dark:text-white before:dark:bg-white"
                                            data-tooltip={
                                                icon.title
                                            }
                                        >
                                            <icon.SvgIcon
                                                className={`h-7 w-7 ${icon.class} `}
                                            />
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </motion.div>
                )
            )}
        </motion.div>
    );
}
// function useTheme(): { theme: any; } {
//     throw new Error("Function not implemented.");
// }
