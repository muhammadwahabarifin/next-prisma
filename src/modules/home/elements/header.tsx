"use client";

import BlurIn from "@/common/components/ui/blur-in";
import { Button } from "@/common/components/ui/button";
import { Ripple } from "@/common/components/ui/ripple";
import { ShinyButton } from "@/common/components/ui/shiny-button";
import { TextGenerateEffect } from "@/common/components/ui/text-generate-effect";
import { word } from "@/common/constant/text";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Header() {
    function myfun() {
        alert(
            "Sorry, the page you are looking for is under maintenance.✌️"
        );
    }
    return (
        <section className="relative flex w-full h-screen flex-col items-center justify-center overflow-hidden rounded-lg dark:bg-dark">
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center p-4 md:pt-0">
                <BlurIn word="Hi I&#39;m WahabArf" />
                <TextGenerateEffect
                    words={word}
                    className="capitalize"
                />
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                        ease: [
                            0, 0.71, 0.2, 1.01,
                        ],
                    }}
                    className="mt-10 flex items-center gap-4"
                >
                    {/* <Alert /> */}
                    <Link href="/">
                        <Button
                            className="flex items-center bg-white text-black hover:bg-white hover:shadow-lg hover:scale-x-105 transition duration-300"
                            type="button"
                            onClick={myfun}
                        >
                            My Resume
                        </Button>
                    </Link>
                    <div>
                        <Link href="https://github.com/muhammadwahabarifin">
                            <ShinyButton className="flex group items-center py-2.5">
                                <span className="flex items-center dark:text-white">
                                    My Github
                                </span>
                            </ShinyButton>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <Ripple />
        </section>
    );
}
