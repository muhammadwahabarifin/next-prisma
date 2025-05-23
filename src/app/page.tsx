import { METADATA } from "@/common/constant/metadata";
import Layout from "@/common/layout/layout";
import Home from "@/modules/home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Portfolio ${METADATA.exTitle}`,
};

export default async function HomePage() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
