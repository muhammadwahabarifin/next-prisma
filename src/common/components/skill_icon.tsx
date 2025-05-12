"use client";

import { motion } from "framer-motion";
import { Skills } from "../constant/skills";

export const LanguageSkills = () => (
    <>
        {Skills.language?.map(
            (icon: any, index: number) => (
                <li
                    key={index}
                    className="tooltip before:bg-neutral-200 before:text-neutral-700 before:content-[attr(data-tooltip)] dark:text-white before:dark:bg-white"
                    data-tooltip={icon.tooltip}
                >
                    <IconSkills
                        icon={icon}
                        index_={index}
                    />
                </li>
            )
        )}
    </>
);

export const FrontendSkills = () => (
    <>
        {Skills.frontend?.map(
            (icon: any, index: number) => (
                <li
                    key={index}
                    className="tooltip before:bg-neutral-200 before:text-neutral-700 before:content-[attr(data-tooltip)] dark:text-white before:dark:bg-white"
                    data-tooltip={icon.tooltip}
                >
                    <IconSkills
                        icon={icon}
                        index_={index}
                    />
                </li>
            )
        )}
    </>
);

export const BackendSkills = () => (
    <>
        {Skills.backend?.map(
            (icon: any, index: number) => (
                <li
                    key={index}
                    className="tooltip before:bg-neutral-200 before:text-neutral-700 before:content-[attr(data-tooltip)] dark:text-white before:dark:bg-white"
                    data-tooltip={icon.tooltip}
                >
                    <IconSkills
                        icon={icon}
                        index_={index}
                    />
                </li>
            )
        )}
    </>
);

export const DevopsSkills = () => (
    <>
        {Skills.devops?.map(
            (icon: any, index: number) => (
                <li
                    key={index}
                    className="tooltip before:bg-neutral-200 before:text-neutral-700 before:content-[attr(data-tooltip)] dark:text-white before:dark:bg-white"
                    data-tooltip={icon.tooltip}
                >
                    <IconSkills
                        icon={icon}
                        index_={index}
                    />
                </li>
            )
        )}
    </>
);

interface IconSkillsProps {
    icon: any;
    index_: number;
}
const IconSkills = ({
    icon,
    index_,
}: IconSkillsProps) => (
    <motion.div
        initial={{
            opacity: 0,
            filter: "blur(15px)",
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
        }}
        transition={{ delay: 0.5 * index_ }}
        viewport={{ once: true, amount: 0.8 }}
    >
        <icon.SvgIcon
            className={`h-10 w-10 ${icon.class}`}
        />
    </motion.div>
);
