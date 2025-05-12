"use client";

import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 200,
            }}
            className="mt-6 flex flex-col items-center gap-5 px-5 sm:px-20"
        >
            <hr className="w-full" />

            <div className="flex w-full flex-col gap-5 md:flex-row md:justify-center md:gap-0">
                <p className="text-sm text-neutral-500 text-center">
                    © 2024 All Rights Reserved | WahabArf
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
