import BannerLogos from "@/src/components/bannerlogos";
import Services from "@/src/app/home/services";
import AboutSec from "@/src/app/home/aboutsec";
import ExperienceSec from "@/src/app/home/experience";
import CaseStudy from "@/src/app/home/casestudy";
import WorkSec from "@/src/app/home/work";
import Achievement from "@/src/app/home/achievement";
import Testimonial from "@/src/app/home/testimonial";
import Contact from "@/src/app/home/contact";
import MainBanner from "@/src/components/mainbanner";
import IMG01 from "media/home/testimonial/test1.webp"
import IMG02 from "media/home/testimonial/test2.webp"
import IMG03 from "media/home/testimonial/test3.webp"
import IMG04 from "media/home/testimonial/test4.webp"
import IMG05 from "media/home/testimonial/test5.webp"
import IMG06 from "media/home/testimonial/test6.webp"

export const metadata = {
  title: "Cloud Studios Inc: Cutting-Edge Video Animation Studio in USA.",
  description: "Cloud Studios Inc. delivers innovative animation, video production services, and VFX solutions. From cel animation, hybrid animation, 3D visualization, and AR/VR augmentation to real-time rendering, we are the 'destination' for your brand's success. ",
};


const banner = {
  rating: "The New Frontier in Animation.",
  star: "yes",
  title: "Revolutionize Your Digital Content with Cloud Studios Inc.",
  txt: (
    <>
      <p> <strong>Engage Your Audiences & Boost Your Reach Today!</strong></p>
      <p>We engineer dynamic video content, lead advancements in cutting-edge animation technology, and create immersive digital worlds to push your brand into new virtual frontiers.</p>
    </>
  ),
  video: "https://player.vimeo.com/video/1001680637?h=44a469d25a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  link: "#"

}
const SLIDES = [
  {
    name: "Sarah Benny",
    txt: "Leveraging Cloud Studios' animation service was the best decision ever. They turned our architectural concept into a mind-blowing 3D walkthrough! Their visualization skills and animated services are out of this world.",
    img: IMG01.src,
    video: "videos/LogoAnimation3.mp4",
  },
  {
    name: "Michelle Joanna",
    txt: "OMG! The cel animation the studio created for our indie film was pure magic! The animation agency somehow captured the nostalgia of old-school cartoons while adding a modern twist.",
    img: IMG02.src,
    video: "videos/LogoAnimation3.mp4",
  },
  {
    name: "Rusell J. Peters ",
    txt: "Holy hybrid animation, Superman! Cloud Studios is the best video marketing agency. It was an eye-popping visual feast that had our fans buzzing! They're the real superheroes of animation services!",
    img: IMG03.src,
    video: "videos/LogoAnimation3.mp4",
  }, {
    name: "Lisa Kevins",
    txt: "The graphics are so smooth and realistic that players feel like they're actually behind the wheel. These folks have some serious horsepower in their rendering engines!",
    img: IMG04.src,
    video: "videos/LogoAnimation3.mp4",
  }
  , {
    name: "Lisa Kevins",
    txt: "The graphics are so smooth and realistic that players feel like they're actually behind the wheel. These folks have some serious horsepower in their rendering engines!",
    img: IMG05.src,
    video: "videos/LogoAnimation3.mp4",
  }
  , {
    name: "Lisa Kevins",
    txt: "The graphics are so smooth and realistic that players feel like they're actually behind the wheel. These folks have some serious horsepower in their rendering engines!",
    img: IMG06.src,
    video: "videos/LogoAnimation3.mp4",
  }
]


export default function Home() {
  return (
    <>
      <MainBanner data={banner} />
      <BannerLogos />
      <Services />
      <AboutSec />
      <ExperienceSec />
      <CaseStudy />
      <WorkSec />
      <Achievement />
      <Testimonial clients="yes" slides={SLIDES} />
      <Contact />
    </>
  );
}
