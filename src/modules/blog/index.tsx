import { BackgroundLines } from "@/common/components/ui/background-lines";
import React from "react";

const Blog = () => {
    return (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent text-3xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight uppercase">
                    comming soon !!! <br />{" "}
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-500 text-center">
                    Design By{" "}
                    <span className="underline underline-offset-4 text-neutral-300 font-semibold">
                        Wahabarf
                    </span>
                </p>
            </BackgroundLines>
        </div>
    );
};

export default Blog;
