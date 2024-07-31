import MainBanner from "@/src/components/mainbanner";
import BannerBg from "media/about/aboutBg.webp"
import Contact from "@/src/app/home/contact";
import BannerLogos from "@/src/components/bannerlogos";
import WorkSec from "@/src/app/home/work";
import TeamSec from "@/src/app/about/team";
import MissionSec from "@/src/app/about/mission";
import Achievement from "@/src/app/home/achievement";
import Testimonial from "@/src/app/home/testimonial";

import IMG01 from "media/home/testimonial/1.png"
import IMG02 from "media/home/testimonial/2.png"
import IMG03 from "media/home/testimonial/3.png"
import IMG04 from "media/home/testimonial/4.png"

export const metadata = {
    title: "Powerful branding & top-tier storytelling with Cloud Studios' Award-Winning Animation and Visual Effects",
    description: "Discover how Cloud Studios' innovators and artists infuse the power of next-gen animation and visual effects to revolutionize your brand's storytelling and pull your audiences towards you.",
};


const banner = {
    rating: "Experience the difference in animation",
    title: "Brands and businesses take the stratosphere route here.",
    txt: (
        <>
            <p>With years of experience in the industry, our experts have honed their skills to deliver consistently exceptional results, earning us a reputation as one of the most sought-after animations and VFX studios in the business.</p>
        </>
    ),
    img: BannerBg.src,
    link: "#"

}
const Teams = [
    {
        name: "Isabel Dodson",
        txt: "Creative Director",
        img: IMG01.src,
    },
    {
        name: "Benny Weiss",
        txt: "Animation & RnD Director",
        img: IMG02.src,
    },
    {
        name: "Olivia Harris",
        txt: "VFX Supervisor",
        img: IMG03.src,
    }
]
const SLIDES = [
    {
        name: "Sarah Benny",
        txt: "Cloud Studios turned our architectural concept into a mind-blowing 3D walkthrough! Their visualization skills are out of this world. It felt like I was strolling through our future building. 10/10.",
        img: IMG01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Michelle Joanna",
        txt: "OMG! The cel animation the studio created for our indie film was pure magic! They somehow captured the nostalgia of old-school cartoons while adding a modern twist. ",
        img: IMG02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Rusell J. Peters ",
        txt: "Holy hybrid animation, Superman! Cloud Studios mixed 2D and 3D like nobody's business for our superhero series. The result? It was an eye-popping visual feast that had our fans buzzing!",
        img: IMG03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Lisa Kevins",
        txt: "The real-time rendering for our racing game is insanely good! The graphics are so smooth and realistic that players feel like they're actually behind the wheel. These folks have some serious animation horsepower!",
        img: IMG04.src,
        video: "videos/LogoAnimation3.mp4",
    }
]
export default function About() {
    return (
        <>
            <MainBanner data={banner} />
            <BannerLogos />
            <WorkSec />
            <TeamSec slides={Teams} />
            <MissionSec />
            <Achievement />
            <Testimonial clients="yes" slides={SLIDES} />
            <Contact />
        </>
    );
}
