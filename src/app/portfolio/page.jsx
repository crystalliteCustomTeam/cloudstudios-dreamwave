import MainBanner from "@/src/components/mainbanner";
import BannerBg from "media/portfolio/portfolioBanner.webp"
import CaseStudy from "@/src/app/home/casestudy";
import Testimonial from "@/src/app/home/testimonial";
import Contact from "@/src/app/home/contact";
import BannerLogos from "@/src/components/bannerlogos";

const banner = {
    title: "Design & Marketing on Steroids",
    txt: (
        <>
            <p>Cloud Studios makes all kinds of videos and below are some of our favorite 3D, 2D, Mixed Media and Live Action examples. We are proud to create videos that bring our client's visions to life through research, strategy, copywriting, and custom visuals.</p>
            <p>Interested in a specific industry or subject? Type it in search, and the relevant videos will populate.</p>
            <p>Schedule a meeting with us to discuss what you have in mind!</p>
        </>
    ),
    img: BannerBg.src,
    link: "#"

}

export default function Portfolio() {
    return (
        <>
            <MainBanner data={banner} />
            <BannerLogos />
            <CaseStudy />
            <Testimonial />
            <Contact />
        </>
    );
}
