"use client";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";
import { usePathname } from "next/navigation";

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    const conditionalVariable = pathname !== "/lp/explainer-video-animation";

    return (
        <>
            {conditionalVariable && <Header />}
            {children}
            {conditionalVariable && <Footer />}
        </>
    );
};

export default ConditionalLayout;