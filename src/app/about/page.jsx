import MainBanner from "@/src/components/mainbanner";
import Contact from "@/src/app/home/contact";
import BannerLogos from "@/src/components/bannerlogos";
import WorkSec from "@/src/app/home/work";
import TeamSec from "@/src/app/about/team";
import MissionSec from "@/src/app/about/mission";
import Achievement from "@/src/app/home/achievement";
import Testimonial from "@/src/app/home/testimonial";

import IMG04 from "media/home/testimonial/test4.webp"
import IMG05 from "media/home/testimonial/test5.webp"
import IMG06 from "media/home/testimonial/test6.webp"




const banner = {
    rating: "Experience the difference in animation",
    title: "Elevate Your Brand to New Levels with Us",
    txt: (
        <>
            <p>With years of experience in the industry, our experts have honed their skills to deliver consistently exceptional results, earning us a reputation as one of the most sought-after animations and VFX studios in the business.</p>
        </>
    ),
    video: "https://player.vimeo.com/video/982270806?background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    link: "#"
}
const Teams = [
    {
        name: "Isabel Dodson",
        txt: "Creative Director",
        img: IMG04.src,
    },
    {
        name: "Benny Weiss",
        txt: "Animation & RnD Director",
        img: IMG05.src,
    },
    {
        name: "Olivia Harris",
        txt: "VFX Supervisor",
        img: IMG06.src,
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
            <Testimonial clients="yes" />
            <Contact />
        </>
    );
}
