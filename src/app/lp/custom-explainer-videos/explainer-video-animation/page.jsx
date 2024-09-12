import Award from "./award";
import Banner from "./banner";
import Header from "./header";
import CaseStudiesLP from "./casestudies";
import ClientsLP from "./clients";
import PricingLP from "./pricing";
import ServicesLP from "./services";
import CtaLP from "./cta";
import CreationLP from "./creation";
import OutcomesLP from "./outcomes";
import CtavideoLP from "./ctavideos";
import ClientsReviewLP from "./clientsreview";
import FaqsLP from "./faq";
import FooterLP from "./footer";

export const metadata = {
    title: "Professional Logo Animation Services | Make Your Brand Stand Out.",
    description: "Lead the digital frontier with our expert custom logo animation services at Cloud Studios Inc. Elevate your brand presence with professional, captivating visuals that set you apart.",
};

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <Award />
            <CaseStudiesLP />
            <ClientsLP />
            <PricingLP />
            <ServicesLP />
            <CtaLP />
            <CreationLP />
            <OutcomesLP />
            <CtavideoLP />
            <ClientsReviewLP />
            <FaqsLP />
            <FooterLP />
        </>
    );
}
