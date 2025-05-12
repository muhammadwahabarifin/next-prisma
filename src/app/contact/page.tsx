import { METADATA } from "@/common/constant/metadata";
import Layout from "@/common/layout/layout";
import Contact from "@/modules/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `Contact ${METADATA.exTitle}`,
};

export default function ContactPage() {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}
