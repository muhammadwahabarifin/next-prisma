import React from "react";
import { TbCloudComputing } from "react-icons/tb";
import AboutList from "./elements/about";
import FramerWrapper from "@/common/components/animation/FramerWrappper";
import { Processor } from "@/common/components/lottie";

export default function AboutMe() {
    return (
        <section className="w-full relative py-20 px-[7%] bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
            <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row items-center lg:my-18">
                <FramerWrapper
                    x={-100}
                    y={0}
                    className="absolute my-10 left-0 z-[-1] lg:w-1/2 hidden md:flex">
                    <Processor />
                </FramerWrapper>
                <div className="w-full md:w-1/2 h-full flex justify-center">
                    <div className="w-fit h-full"></div>
                </div>
                <FramerWrapper
                    y={0}
                    x={100}
                    className="w-full md:w-1/2 flex flex-col gap-7">
                    <div className="flex gap-3 items-center">
                        <TbCloudComputing
                            strokeWidth="1"
                            className="w-14 md:w-20 h-full text-green-600"
                        />
                        <div className="h-fit flex flex-col">
                            <h2 className="text-2xl font-semibold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                About Me
                            </h2>
                            <p className="md:text-xl text-lighter dark:text-darkter">
                                My description in
                                website
                                development
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="w-full text-light dark:text-darkter font-medium">
                            <span className="text-2xl font-semibold text-light dark:text-neutral-400">
                                Hello,
                            </span>{" "}
                            <br />
                            Welcome to my
                            portfolio! I am a
                            passionate Frontend
                            Developer on my way to
                            becoming a Full-stack
                            Developer. I have big
                            dreams of mastering
                            various modern
                            technologies. I love
                            building modern UI
                            applications using
                            cutting-edge
                            frameworks like React.
                            My portfolio features
                            a collection of
                            projects that showcase
                            my skills and
                            dedication to creating
                            innovative solutions.
                            Feel free to explore
                            my projects.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-light dark:text-neutral-400">
                            Education
                        </h3>
                        <p className="flex gap-3 text-light dark:text-darkter">
                            Dian Nuswantoro
                            Univercity
                            <a
                                target="_blank"
                                aria-label="School Location"
                                href="https://www.google.com/maps/place/Universitas+Dian+Nuswantoro/@-6.9826741,110.4064857,17z/data=!3m1!4b1!4m6!3m5!1s0x2e708b4ec52229d7:0xc791d6abc9236c7!8m2!3d-6.9826794!4d110.4090606!16s%2Fg%2F121kq4bb?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 fill-light dark:fill-white animate-bounce"
                                >
                                    <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"></path>
                                </svg>
                            </a>
                        </p>
                        <p className="text-lighter dark:text-darkter">
                            July 2021
                        </p>
                    </div>
                </FramerWrapper>
            </div>
            {/* list elements */}

            <AboutList />

            {/* slider */}
            {/* <div className="fixed top-0 z-50 h-screen w-[100%] translate-x-[100%] animate-slide-in-out bg-black" /> */}

            {/* blob */}
            <div className="fixed -left-10 -top-10 -z-20 h-[18%] w-[80%] -rotate-12 bg-gradient-to-r from-light to-lighter rounded-lg blur-[150px]" />
            {/* <div className="fixed top-0 z-50 w-[100%] h-screen translate-x-[100%] bg-black animate-slide-in-out" /> */}
        </section>
    );
}
