import MainBanner from "@/src/components/mainbanner";
import Testimonial from "@/src/app/home/testimonial";
import Contact from "@/src/app/home/contact";
import BannerLogos from "@/src/components/bannerlogos";
import CaseStudies from "@/src/components/casestudies";



const banner = {
    title: "Animation, Design, Digital & Everything",
    txt: (
        <>
            <p>We are not just animators – we’re visual animation sorcerers. Born from a passion for pushing the boundaries of digital storytelling, weve evolved into pioneers of next-gen animation for businesses. Our journey began with a simple belief: every brand has a unique story waiting to be told through motion.</p>
            <p>We blend cutting-edge technology with creative genius to deliver super-immersive experiences that don’t just grab attention – they ignite the imagination, push brands through the clutter and break frontiers. </p>
        </>
    ),
    video: "https://player.vimeo.com/video/982260192?background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    link: "#"
}


export default function Portfolio() {
    return (
        <>
            <MainBanner data={banner} />
            <BannerLogos />
            <CaseStudies />
            <Testimonial clients="yes" />
            <Contact data="Become a part of the Cloud Studios revolution and forge your brand to penetrate everything digital." />
        </>
    );
}
