import MainBanner from "@/src/components/mainbanner";
import BannerBg from "media/portfolio/portfolioBanner.webp"
import CaseStudy from "@/src/app/home/casestudy";
import Testimonial from "@/src/app/home/testimonial";
import Contact from "@/src/app/home/contact";
import BannerLogos from "@/src/components/bannerlogos";
import IMG01 from "media/home/testimonial/1.png"
import IMG02 from "media/home/testimonial/2.png"
import IMG03 from "media/home/testimonial/3.png"
import IMG04 from "media/home/testimonial/4.png"

export const metadata = {
    title: "A portfolio that revolutionizes everything animated and digital – Cloud Studios",
    description: "Explore our groundbreaking animation solutions for businesses and brands. From sleek explainers, powerful motion graphics, and hybrid/cel animation to immersive animation experiences –witness how we're revolutionizing visual storytelling for brands.",
};


const banner = {
    title: "Animation, Design, Digital & Everything",
    txt: (
        <>
            <p>We are not just animators – we’re visual animation sorcerers. Born from a passion for pushing the boundaries of digital storytelling, weve evolved into pioneers of next-gen animation for businesses. Our journey began with a simple belief: every brand has a unique story waiting to be told through motion.</p>
            <p>We blend cutting-edge technology with creative genius to deliver super-immersive experiences that don’t just grab attention – they ignite the imagination, push brands through the clutter and break frontiers. </p>
        </>
    ),
    img: BannerBg.src,
    link: "#"

}

const SLIDES = [
    {
        name: "Nance Jameson",
        txt: "Cloud Studios turned our product launch into a viral sensation! Their animation was out of this world! As a marketing director, I couldn't be happier about the results.",
        img: IMG01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Green-Earth",
        txt: "Unconceivable creativity meets flawless execution. Cloud Studios is in a league of its own! Brains and class! My team loved the whiteboard animation they did. They are still doing a lot more of what AI can do!",
        img: IMG02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Iris Neil",
        txt: "Our engagement rates skyrocketed after Cloud Studios USA worked their magic. Simply unbeatable! Sales are going up, and engagement is boosting – yay!",
        img: IMG03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Wiona Belt",
        txt: "These guys don't just create animations; they craft experiences that leave lasting impressions. Wow! Wow! I am super stoked to work with them on our new projects.",
        img: IMG04.src,
        video: "videos/LogoAnimation3.mp4",
    }
]
export default function Portfolio() {
    return (
        <>
            <MainBanner data={banner} />
            <BannerLogos />
            <CaseStudy />
            <Testimonial clients="yes" slides={SLIDES} />
            <Contact data="Become a part of the Cloud Studios revolution and forge your brand to penetrate everything digital." />
        </>
    );
}
