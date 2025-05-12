import { Input } from "@/common/components/ui/input";
import { ShinyButton } from "@/common/components/ui/shiny-button";
import { ArrowRight } from "lucide-react";

export default function Form() {
    return (
        <div className="p-4 mt-8 max-w-md justify-center items-center w-full md:mr-10">
            <form action='https://formsubmit.co/wahabmuhammad691@email.com' method="POST">
                <div className="flex flex-col">
                    <div className="p-2 w-full ">
                        <Input
                            type="text"
                            placeholder="Name"
                            name="name"
                            required
                            id="name"
                            className="bg-transparent focus:bg-white border-b text-black border-neutral-300 focus:border-none h-10 px-4 outline-none w-full"
                        />
                    </div>
                    <div className="p-2 w-full ">
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="bg-transparent focus:bg-white focus:text-black border-b border-neutral-300 h-10 px-4 outline-none w-full"
                        />
                    </div>
                    <div className="p-2 w-full">
                        <textarea
                            placeholder="Message"
                            name="message"
                            id="message"
                            required
                            className="h-28 bg-transparent focus:bg-white focus:text-black border-b focus:rounded-lg border-neutral-300 px-4 outline-none w-full text-black"
                        />

                        <ShinyButton className="flex group items-center mt-4 dark:text-white">
                            <span className="flex items-center dark:text-white">
                                Let's Talk
                                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </ShinyButton>
                    </div>
                </div>
            </form>
        </div>
    )
}