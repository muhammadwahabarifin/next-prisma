import { METADATA } from "@/common/constant/metadata";
import Layout from "@/common/layout/layout";
import Projects from "@/modules/project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `All Project ${METADATA.exTitle}`,
};

export default function ProjectPage() {
    return (
        <Layout>
            <Projects />
        </Layout>
    );
}
