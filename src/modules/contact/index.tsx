"use client";

import { motion } from "framer-motion";
import React from "react";
import Form from "./elements/form";

export default function Contact() {
    return (
        <motion.div
            className="h-screen flex max-w-full flex-col items-center justify-center bg-grid-black/[0.04] dark:bg-grid-white/[0.04] relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
        >
            <div className="flex w-full items-center">
                <div className="px-5 w-full">
                    <div className="relative flex flex-col gap-2 items-center mb-10">
                        <h1 className="text-light text-5xl font-bold leading-tight md:text-5xl xl:text-6xl text-start dark:text-neutral-400">
                            Contact Me
                        </h1>
                        <p
                            className="lg:text-center md:text-start text-lighter dark:text-neutral-500 font-medium"
                        >
                            &nbsp;Fill out the form or send us an email.
                        </p>
                        {/* <p className="flex items-center text-lighter dark:text-neutral-500">
                            <IoPhonePortraitOutline />
                            &#64;wahabarf
                        </p> */}
                        {/* <div className="mt-2">
                            <Socials
                                hidden={false}
                            />
                        </div> */}
                        {/* form */}
                        <Form />
                    </div>
                </div>
            </div>

            <div className="fixed -left-10 -top-10 -z-20 h-[18%] w-[80%] -rotate-12 bg-gradient-to-r from-lighter to-light rounded-lg blur-[150px]" />
        </motion.div>
    )
}