import Banner from "./banner";
import ClientSlider from "./clients";
import ContentSection from "./content";
import ContentSection1 from "./content1";
import Header from "./header";
import Pricing from "./pricing";
import CaseStudiesLP from "./casestudies";
import BenefitsSection from "./benefits";
import Testimonials from "./testimonials";
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
            <ClientSlider />
            <ContentSection />
            <ContentSection1 />
            <Pricing />
            <CaseStudiesLP />
            <BenefitsSection />
            <Testimonials />
            <FooterLP />

        </>
    );
}
