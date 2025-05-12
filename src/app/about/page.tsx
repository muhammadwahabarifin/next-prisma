import { METADATA } from "@/common/constant/metadata";
import Layout from "@/common/layout/layout";
import About from "@/modules/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `About ${METADATA.exTitle}`,
};

export default function AboutPage() {
    return (
        <Layout>
            <About />
        </Layout>
    );
}
