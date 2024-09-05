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
// import IMG_03 from "media/home/testimonial/test3.webp"
import IMG_04 from "media/home/testimonial/test4.webp"
import MainBanner from "@/src/components/mainbanner";



const banner = {
    rating: "The New Frontier in Animation.",
    star: "yes",
    title: "Overcome Engagement Challenges with 2D Animations Services",
    txt: (
        <>
            <p> <strong>Struggling to Captivate Your Audience?</strong></p>
            <p>Our 2D animations cut through the noise and grab attention. With our visually compelling animations, you can address the challenge of audience disengagement and turn viewers into loyal customers.</p>
        </>
    ),
    video: "https://player.vimeo.com/video/1001676601?h=435c89dc96&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    link: "#"
}
const ratingData = {
    title: "Forge Better Engagement with 2D Animation Solutions by Cloud Studios Inc.",
    txt: (
        <>
            <p>Break free from the limits of traditional 2D animations with Cloud Studios’ innovative techniques. Our unique platform uses advanced technology to give your visual content amazing depth, energy, and a more dynamic look.</p>
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
            <p>Engage your audience with visually rich experiences where characters and environments feel solid and realistic. Our cutting-edge methods work smoothly with your current 2D tools, helping you achieve your most ambitious design goals. By using our advanced 2D animation tools, our animations can increase message retention by up to 80% compared to static images.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Pushing the Boundaries of 2D Storytelling",
    subtitle: "Your Holistic Animation Studio",
    txt: (
        <>
            <p>Cloud Studios’ pioneering approach to 2D animation empowers brands to exceed the medium’s traditional constraints. Our 2D animation services elevate 2D visuals with depth, fluidity, and emotional resonance by integrating cutting-edge motion capture technology and generative AI algorithms. This allows marketers to craft dynamic, immersive narratives that forge deep, lasting connections with their target audiences. With Cloud Studios leading the charge of the best 2d animation company, the future of 2D digital animation is poised to rewrite the rules of visual engagement.</p>
        </>
    )
}
const contentData2 = {
    title: "Experience Multi-channel Success Through Video Animation",
    txt: (
        <>
            <p>At Cloud Studios, our custom 2D animation services use the latest technology to create unique animations. We capture live-action performances in real time and translate them into vibrant 2D animations, keeping the genuine, emotional qualities that engage viewers. Our advanced methods also create dynamic backgrounds and environments, giving 2D content a sense of depth that goes beyond traditional limits.cinematic immersion, and brand resonance that captivates viewers while strengthening tangible business impact.</p>
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
            <p>At Cloud Studios, we don’t settle for good enough; we strive for extraordinary outcomes.The key to our success is our unwavering determination to extract every ounce of potential from even the most tough challenges.</p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon01 />,
        name: (
            <h5>Motion Capture and Performance Optimization</h5>
        ),
        txt: (

            <p>We use cutting-edge motion capture technology to give our 2D digital animation a lifelike, human-centered quality. By precisely converting the tiny details of live-action performances into 2D animated keyframes, we can maintain the organic fluidity and expressive dynamism that engages viewers on a deeper emotional level.</p>
        ),
    },
    {
        icon: <Icon02 />,
        name: (
            <h5>
                Procedural Environment <br />Generation
            </h5>
        ),
        txt: (
            <p>Recognizing that spatial depth is essential for immersive 2D animated storytelling, we use complex procedural techniques to dynamically produce the backgrounds, environments, and atmospheric elements that frame our animated stories. This generative approach enables us to build rich cinematic backdrops that evolve spontaneously in rhythm.</p>
        ),
    },
    {
        icon: <Icon03 />,
        name: (
            <h5>Immersive Audio Integration, Adaptive Cinematography</h5>
        ),
        txt: (
            <p>The use of rich, dramatic audio design enhances our 2D animations. By working collaboratively with award-winning composers and sound engineers, we create cinematic soundscapes that amplify the emotional impact of our animated stories. Our audio integration approach offers a genuinely immersive viewing experience, with visceral sound effects that bring the on-screen action to life and compelling musical soundtracks.</p>
        ),
    },
    {
        icon: <Icon04 />,
        name: (
            <h5>Integrative Brand <br />Storytelling</h5>
        ),
        txt: (
            <p>The final stage of our 2D animation production is to seamlessly integrate the client’s brand identity, messaging, and creative vision into the final animated content.Our team collaborates closely with in-house branding professionals to ensure that each visual aspect, from character design to color palette, captures the essence of the client’s brand.</p>
        ),
    },
    {
        icon: <Icon05 />,
        name: (
            <h5>Concept Ideation and <br />Storyboard </h5>
        ),
        txt: (
            <>
                <p>Our 2d animation company works closely with clients to capture their brand essence and creative vision into a cohesive narrative blueprint. Using powerful storyboarding tools, we methodically plan each scene, specifying the camera angles, character movements, and emotional beats that will serve as the foundation.</p>
            </>
        )
    },
]
const CtaData = {
    title: "Cutting-edge 2D Animation services are just a tap away! ",
    btntxt: "Grab your bag of chips, and let's get the ball rolling!",
}
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
            <Testimonial clients="yes" />
            <Contact />
        </>
    );
}
