import { ReactNode } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


interface ContainerProps {
    children: ReactNode;
    className?: string;
    [propName: string]:
    | ReactNode
    | string
    | undefined;
}

export default function Layout({
    children,
    className = "",
    ...others
}: ContainerProps) {
    return (
        <>
            <Navbar />
            <div
                className={`${className} dark:text-neutral-300`}
                {...others}
            >
                {children}
            </div>
            <Footer />
        </>
    );
}
