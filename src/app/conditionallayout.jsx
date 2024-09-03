"use client";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";
import { usePathname } from "next/navigation";
import SidebarCTA from "../components/sidebarcat/SidebarCta";

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    const conditionalVariable = pathname !== "/lp/explainer-video-animation";

    return (
        <>
            {conditionalVariable && <Header />}
            {children}
            <SidebarCTA />
            {conditionalVariable && <Footer />}
        </>
    );
};

export default ConditionalLayout;
