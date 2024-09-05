import BannerLogos from "@/src/components/bannerlogos";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/2d-animations/img01.webp"
import IMG02 from "media/commonpages/2d-animations/img02.webp"
import IMG03 from "media/commonpages/2d-animations/img03.webp"
import Testimonial from "@/src/app/home/testimonial";
import Achievement from "@/src/app/home/achievement";
import Contact from "@/src/app/home/contact";
import ScrollingLogos from "@/src/components/commonpages/scrollinglogos";
import ElevateSec from "@/src/components/commonpages/elevate";
import CtaSec from "@/src/components/commonpages/cta";
import { Icon01, Icon02, Icon03, Icon04, Icon05 } from "@/src/app-constants";
import IMG_01 from "media/home/testimonial/test1.webp"
import IMG_02 from "media/home/testimonial/test2.webp"
import IMG_03 from "media/home/testimonial/test3.png"
import IMG_04 from "media/home/testimonial/test4.webp"
import MainBanner from "@/src/components/mainbanner";



const banner = {
    rating: "The New Frontier in Animation.",
    star: "yes",
    title: "Refine Your Footage for Maximum Impact with Video Editing Services",
    txt: (
        <>
            <p> <strong>Struggling with Unpolished Content?</strong></p>
            <p>Our video editing services transform your raw footage into polished, professional content. Address the issue of subpar video quality and enhance engagement with expertly edited videos that make an impact.</p>
        </>
    ),
    video: "https://player.vimeo.com/video/1001684059?h=8336b1020f&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    link: "#"
}
const ratingData = {
    title: "We are Pro-Level Video-Editors – Unbeatable Prices, Precision Editing. ",
    txt: (
        <>
            <p>We specialize in transforming raw footage into ultra-refined, high-definition, and immersive narratives that magnetize audiences and empower your brand and business. Are you worried about high video editing costs? Leave it to Cloud Studios, where we deliver precision editing at amazing prices for boosted brand impact.</p>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Raw Footage Turned Gold with Video Editing Services.",
    txt: (
        <>
            <p>In a digital frontier, where 90% of consumers say video helps them make purchasing decisions, investing in a top-notch video editing service is non-negotiable. At Cloud Studios, we understand that 80% of all internet traffic now consists of video content, and we’re here to make sure yours stands out. Companies that utilize professional video editing see a 49% faster revenue growth than those that don’t. Our video editing company leverages cutting-edge tools and techniques to transform your raw footage into powerful narratives, period!</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "High-Grade, Cutting-Edge Video-Editing for Businesses.",
    subtitle: "Your Holistic Animation Studio",
    txt: (
        <>
            <p>We offer online video editing services tailored to your needs, ensuring your brand doesn’t just blend in—it dominates the market. With flexible video editing costs and packages, Cloud Studio makes it easy to empower your video content game without breaking the bank. Ready to turn your vision into a reality? Contact the video editing pros today for precision animation and video editing solutions.</p>
        </>
    )
}
const contentData2 = {
    title: "Experience Success in The Digital World with High-Grade Video Editing.",
    txt: (
        <>
            <p>In a digital world where 82% of internet traffic is driven by video, video editing isn’t just an option—it’s essential. Whether you’re utilizing online video editing or working with the top video editing companies, the variance between mediocre and excellent content often comes down to the best video editing and finishing techniques. Our video editing services guarantee your footage isn’t just cut together but transformed into a narrative that hooks your audience. With our video editing company, you get not just quick video editing but a thorough process in video editing studios that refine your content to perfection. </p>
        </>
    ),
    img: IMG03.src,
    btntxt: "Make An Animation",
    link: "#"
}
const ElevateData = {
    title: "How do we elevate the ordinary to the extraordinary?",
    txt: (
        <>
            <p>At Cloud Studios, we don’t settle for good enough; we strive for extraordinary outcomes. The key to our success is our unwavering determination to extract every ounce of potential from even the most arduous challenges.</p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon01 />,
        name: (
            <h5>Vision & Brainstorming</h5>
        ),
        txt: (

            <p>Our video editing company starts by immersing ourselves in your vision to create a detailed storyboard.This phase involves defining the structure of your content, including transitions, visual effects, and critical moments, setting the stage for impactful video editing.We aim to map every detail to ensure a cohesive and engaging narrative.</p>
        ),
    },
    {
        icon: <Icon02 />,
        name: (
            <h5>
                Dynamic Footage
            </h5>
        ),
        txt: (
            <p>We use advanced tools to refine your footage, focusing on precise color correction and sharpness adjustments. Our team ensures that each frame is polished and aligned with your vision, enhancing the overall quality of the video editing services. This meticulous attention to detail ensures that your final product is visually stunning.</p>
        ),
    },
    {
        icon: <Icon03 />,
        name: (
            <h5>Custom Backgrounds and Visual Effects</h5>
        ),
        txt: (
            <p>We create custom backgrounds and incorporate innovative visual effects to make your content stand out. By utilizing sophisticated techniques, we add depth and richness to the environment, transforming your footage into a visually compelling experience. This step is crucial for creating engaging video editing that captivates viewers.</p>
        ),
    },
    {
        icon: <Icon04 />,
        name: (
            <h5>Immersive Audio and Soundscaping</h5>
        ),
        txt: (
            <p>Our video editing process includes crafting immersive audio landscapes. We collaborate with top sound designers to add impactful sound effects and music that enhance the emotional tone of your content. This audio integration ensures that the auditory experience complements and elevates the visual storytelling.</p>
        ),
    },
    {
        icon: <Icon05 />,
        name: (
            <h5>Brand Integration and Tweaking</h5>
        ),
        txt: (
            <>
                <p>In the final stage, we align your content with your brand identity. Our team meticulously integrates brand elements, ensuring that colors, styles, and messages are consistent with your brand. This final touch ensures that every aspect of the video editing services reflects your brand’s essence and delivers a polished, cohesive final product.</p>
            </>
        )
    },
]
const CtaData = {
    title: "Precise Video Editing services are just a tap away!",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const SLIDES = [
    {
        name: "Sophia Martinez",
        txt: "The video editing provided by Cloud Studios Inc. is nothing short of exceptional. Their meticulous approach to editing video and use of advanced techniques truly set them apart. The final product exceeded all our expectations, showcasing some of the best video editing we’ve ever seen.",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Liam Thompson",
        txt: "Working with Cloud Studios Inc. on our online video editing project was a revelation. Their video editing services were not only quick and efficient but also incredibly polished. The video editing company delivered a finished product that was both visually stunning and perfectly aligned with our brand’s vision.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Isabella Johnson",
        txt: "The video editing studios at Cloud Studios Inc. transformed our raw footage into a captivating narrative. Their quick video editing process ensured we met our tight deadlines without sacrificing quality. The results were a testament to their expertise in providing top-notch video editing services.",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Ethan Rogers",
        txt: "Cloud Studios Inc. has redefined our understanding of video editing. Their talented team provided unmatched video editing expertise, turning our footage into a dynamic and engaging piece. With competitive video editing costs and exceptional quality, they’re the go-to video editing company.",
        img: IMG_04.src,
        video: "videos/LogoAnimation3.mp4",
    }
    , {
        name: "Olivia Brown",
        txt: "From the initial consultation to the final edit, Cloud Studios Inc. demonstrated why they’re the best in the business. Their video editing services are unparalleled, and their ability to manage video editing costs while delivering superior results is awe-inspiring. They turned our vision into an extraordinary visual experience.",
        img: IMG_04.src,
        video: "videos/LogoAnimation3.mp4",
    }
]
export default function Page() {
    return (
        <>
            <MainBanner data={banner} />
            <BannerLogos />
            <RatingSec data={ratingData} />
            <ContentSec data={contentData1} />
            <ScrollingLogos data={ScrollData} />
            <ContentSec data={contentData2} />
            <ElevateSec slides={ElevateSlides} data={ElevateData} />
            <CtaSec data={CtaData} />
            <Achievement />
            <Testimonial tit="See what they say about all the cool stuff we do!" clients="yes" slides={SLIDES} />
            <Contact />
        </>
    );
}
