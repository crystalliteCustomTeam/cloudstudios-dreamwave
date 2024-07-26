import MainBanner from "@/src/components/mainbanner";
import BannerBg from "media/about/aboutBg.webp"
import Contact from "@/src/app/home/contact";
import BannerLogos from "@/src/components/bannerlogos";
import WorkSec from "@/src/app/home/work";
import TeamSec from "@/src/app/about/team";
import MissionSec from "@/src/app/about/mission";
import Achievement from "@/src/app/home/achievement";
import Testimonial from "@/src/app/home/testimonial";

const banner = {
    title: "Design & Marketing on Steroids",
    txt: (
        <>
            <p>Our mission is to help our clients uncover the essence of their brand story to drive sales, influence decisions, and promote understanding.</p>
            <p>We will always search for the best way to give our clients a great experience. We will continue to learn about every industry, in order to offer innovative, high quality products with premium value.</p>
        </>
    ),
    img: BannerBg.src,
    link: "#"

}

export default function About() {
    return (
        <>
            <MainBanner data={banner} />
            <BannerLogos />
            <WorkSec />
            <TeamSec />
            <MissionSec />
            <Achievement />
            <Testimonial />
            <Contact />
        </>
    );
}
