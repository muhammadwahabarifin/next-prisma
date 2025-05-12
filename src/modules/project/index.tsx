"use client";

import { motion } from "framer-motion";
import React from "react";
import Card from "./elements/card";

const Projects = () => {
    return (
        <section className=" flex h-[fit-content] w-full flex-col items-center overflow-hidden rounded-md px-[4%] bg-grid-black/[0.04] dark:bg-grid-white/[0.04] ">
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="mt-20 w-auto space-y-5 px-5 sm:mt-36 sm:px-0"
            >
                <h1 className=" text-light text-5xl font-bold leading-tight md:text-5xl xl:text-6xl text-start dark:text-neutral-400">
                    My Recent Works
                </h1>
                <p className="lg:text-center md:text-start text-lighter dark:text-neutral-500 font-medium">
                    Here are a few projects
                    I&apos;ve worked on recently.
                </p>
                <div className="fixed -left-10 -top-10 -z-20 h-[18%] w-[80%] -rotate-12 bg-gradient-to-r from-light to-lighter rounded-lg blur-[150px]" />
            </motion.div>

            {/* card list */}
            <Card />

        </section>
    );
};

export default Projects;
