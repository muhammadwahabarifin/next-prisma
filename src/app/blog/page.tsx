import Navbar from "@/common/components/navbar";
import { METADATA } from "@/common/constant/metadata";
import Blog from "@/modules/blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `Blogs ${METADATA.exTitle}`,
};

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <Blog />
        </>
    )
}
