import { METADATA } from "@/common/constant/metadata";
import Layout from "@/common/layout/layout";
import Sosmed from "@/modules/sosmed";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `Social Media ${METADATA.exTitle}`,
};

export default function SosmedPage() {
    return (
        <Layout>
            <Sosmed />
        </Layout>
    );
}
