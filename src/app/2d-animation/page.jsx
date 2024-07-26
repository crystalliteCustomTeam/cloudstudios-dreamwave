import BannerLogos from "@/src/components/bannerlogos";
import Banner from "@/src/components/commonpages/banner";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/2d-animations/img01.webp"
import IMG02 from "media/commonpages/2d-animations/img02.webp"
import Testimonial from "@/src/app/home/testimonial";
import Achievement from "@/src/app/home/achievement";
import Contact from "@/src/app/home/contact";
import ScrollingLogos from "@/src/components/commonpages/scrollinglogos";
import ElevateSec from "@/src/components/commonpages/elevate";
import CtaSec from "@/src/components/commonpages/cta";

const ratingData = {
    title: "Forge Better Engagement with 2D Animation Solutions by Cloud Studios Inc.",
    txt: (
        <>
            <p>Go beyond the limitations of traditional 2D animation with Cloud Studios pioneering animation techniques. Our proprietary platform harnesses advanced volumetric data processing to imbue your visual content with unparalleled depth, dynamism, and dimensional impact.</p>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}

const contentData1 = {
    title: "Animate Your Digital Frontier",
    txt: (
        <>
            <p>Immerse your audience in richly layered visual experiences where characters and environments exude a palpable sense of solidity, weight, and spatial realism. Our innovative workflows seamlessly integrate with your existing 2D toolsets, empowering you to uncompromisingly achieve your most ambitious design visions. Leveraging the power of our advanced 2D animation tools and techniques, our animated content significantly boosts message retention by up to 80% compared to static imagery.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}

const contentData2 = {
    title: "Animate Your Digital Frontier",
    txt: (
        <>
            <p>At the heart of Cloud Studios custom 2D animation solutions lies a pioneering synthesis of cutting-edge technologies.By leveraging the real-time 3D volumetric capture, our team can directly transfer live-action performances exact physicality and expressive movements into vivid 2D frames.This unique technique retains the organic, human-centric elements that captivate consumers on a deeper emotional level.Complemented by advanced procedural techniques that generate dynamic backgrounds and environments, the result is 2D content that defies the medium&#39;s traditional limitations, delivering dimensional depth, cinematic immersion, and brand resonance that captivates viewers while strengthening tangible business impact.</p>
        </>
    ),
    img: IMG01.src,
    btntxt: "Make An Animation",
    link: "#"
}

export default function Page() {
    return (
        <>
            <Banner />
            <BannerLogos />
            <RatingSec data={ratingData} />
            <ContentSec data={contentData1} />
            <ScrollingLogos />
            <ContentSec data={contentData2} />
            <ElevateSec />
            <CtaSec />
            <Achievement />
            <Testimonial />
            <Contact />
        </>
    );
}
