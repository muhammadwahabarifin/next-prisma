
import FramerWrapper from "@/common/components/animation/FramerWrappper";
import { BackendSkills, DevopsSkills, FrontendSkills, LanguageSkills } from "@/common/components/skill_icon";
import React from "react";
import { TbBrandVscode } from "react-icons/tb";
export default function AboutList() {
    return (
        <div className="my-20 mx-auto">
            <FramerWrapper
                x={-100}
                y={0}
                className="flex items-center gap-3">
                <TbBrandVscode
                    strokeWidth="1"
                    className="h-full md:w-20 w-14 text-cyan-500"
                />
                <div className="h-fit flex flex-col">
                    <h2 className="text-2xl font-semibold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                        My Stack
                    </h2>
                    <p className="md:text-xl text-lighter dark:text-darkter">
                        My skills in software engineering
                    </p>
                </div>
            </FramerWrapper>
            <div className="mt-2 grid grid-cols-1 gap-y-5 lg:grid-cols-4">
                <div className="flex min-w-64 flex-col gap-5 rounded-2xl p-4">
                    <h1 className="text-light dark:text-neutral-400 text-2xl font-bold ">
                        Language
                    </h1>
                    <div className="flex flex-wrap">
                        <ul className="flex flex-wrap gap-6 md:gap-5 lg:gap-3">
                            <LanguageSkills />
                        </ul>
                    </div>
                </div>
                <div className="flex min-w-80 flex-col gap-5 rounded-2xl p-4">
                    <h1 className="text-light dark:text-neutral-400 text-2xl font-bold">
                        Frontend
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        <ul className="flex flex-wrap gap-6 md:gap-5 lg:gap-3">
                            <FrontendSkills />
                        </ul>
                    </div>
                </div>
                <div className="flex min-w-80 flex-col gap-5 rounded-2xl p-4">
                    <h1 className="text-light dark:text-neutral-400 text-2xl font-bold">
                        Backend
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        <ul className="flex flex-wrap gap-6 md:gap-5 lg:gap-3">
                            <BackendSkills />
                        </ul>
                    </div>
                </div>
                <div className="flex min-w-80 flex-col gap-5 rounded-2xl p-4">
                    <h1 className="text-light dark:text-neutral-400 text-2xl font-bold">
                        Devops
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        <ul className="flex flex-wrap gap-6 md:gap-5 lg:gap-3">
                            <DevopsSkills />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
