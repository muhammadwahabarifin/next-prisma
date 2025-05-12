"use client";

import type { LottiePlayer } from "lottie-web";
import {
    useEffect,
    useRef,
    useState,
} from "react";

export const Processor = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [lottie, setLottie] =
        useState<LottiePlayer | null>(null);

    useEffect(() => {
        import("lottie-web").then((Lottie) =>
            setLottie(Lottie.default)
        );
    }, []);

    useEffect(() => {
        if (lottie && ref.current) {
            const animation =
                lottie.loadAnimation({
                    container: ref.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    // path to your animation file, place it inside public folder
                    path: "/lottie/proc.json",
                });

            return () => animation.destroy();
        }
    }, [lottie]);

    return <div ref={ref} />;
};
