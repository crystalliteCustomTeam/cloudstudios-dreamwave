import BannerLogos from "@/src/components/bannerlogos";
import Banner from "@/src/components/commonpages/banner";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/3d-animations/img01.webp"
import IMG02 from "media/commonpages/3d-animations/img02.webp"
import IMG03 from "media/commonpages/3d-animations/img03.webp"
import Testimonial from "@/src/app/home/testimonial";
import Achievement from "@/src/app/home/achievement";
import Contact from "@/src/app/home/contact";
import ScrollingLogos from "@/src/components/commonpages/scrollinglogos";
import ElevateSec from "@/src/components/commonpages/elevate";
import CtaSec from "@/src/components/commonpages/cta";
import { Icon06, Icon07, Icon08, Icon09, Icon10 } from "@/src/app-constants";
import IMG_01 from "media/home/testimonial/1.png"
import IMG_02 from "media/home/testimonial/2.png"
import IMG_03 from "media/home/testimonial/3.png"
import IMG_04 from "media/home/testimonial/4.png"


export const metadata = {
    title: "3D Animation Services - Visuals That Don’t Miss a Dimension",
    description: "Enhance your brand's distinctiveness with Cloud Studios' advanced lifelike 3D animations. Go Beyond Pixels With 3D Animation Services!",
};


const ratingData = {
    title: "Enhance Your Conversion Rates with Hyper-Realistic 3D Animations",
    txt: (
        <>
            <ul>
                <li>Dynamic 3D simulations</li>
                <li>Precise 3D modeling and rendering</li>
                <li>Immersive 3D animations to drive the informed purchase</li>
                <li>Stunning realism and fluid animation</li>
            </ul>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "3D Animations – ‘The Game-Changer’ In Visual Storytelling",
    txt: (
        <>
            <p>Not all 3D animated videos are created equal. As a leading 3D animation company, Cloud Studios Inc. understands the critical importance of aligning animation styles with your brand identity and product objectives. By leveraging advanced 3D modeling techniques, we eliminate the need for costly and time-consuming product shoots, allowing you to present your products in a hyper-realistic and dynamic format. Our team of skilled artists meticulously crafts detailed 3D digital animation models, integrating sophisticated textures, special effects, and strategic embellishments. This technical expertise ensures that your product is the ‘star of the show,’ showcasing its features and benefits with exceptional clarity and visual appeal that engage and convert your audience.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Discover the Future of Animation – See It to Believe It!",
    subtitle: "Jaw-dropping 3D Animation Services that Create the Real Buzz!",
    txt: (
        <>
            <p>Cloud Studios Inc. is an award-winning 3D animation company that caters to businesses of all sizes, from industry giants to emerging startups. Our hyper-realistic 3D animation and explainer videos simplify complex features with clear, engaging visuals, showcasing products in real-life settings and practical applications. We provide faster, budget-friendly solutions that create stunning visuals, keeping viewers engaged and boosting sales. Additionally, our character-driven animations introduce spokespersons or brand mascots that connect with audiences on an emotional level, enhancing brand loyalty and recognition.</p>
        </>
    )
}
const contentData2 = {
    title: "Define your Business Digitally with 3D Animation Services That Magnetize Target Audiences",
    txt: (
        <>
            <p>Empower your digital presence with Cloud Studios Inc.’s precision-crafted 3D animated videos strategically designed to captivate your target audience. Utilizing cutting-edge software and expert knowledge, we specialize in delivering comprehensive 3D architectural animation services tailored for diverse applications in movies, games, and digital platforms. Our advanced services are sought after by leading companies seeking to breathe life into. From creating lifelike characters to bringing fantasy figures to vivid reality, our meticulous process ensures the production of high-end photoreal 3D character animation projects resonates deeply with viewers, setting your brand apart in the saturated market.</p>
        </>
    ),
    img: IMG03.src,
    btntxt: "Make An Animation",
    link: "#"
}
const ElevateData = {
    title: "How Do We Turn Basic Sketches into Interactive 3D Product Animations?",
    txt: (
        <></>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon09 />,
        name: (<h5>Briefing and Storyboarding</h5>),
        txt: (
            <>
                <p>The process starts with a comprehensive briefing session where our team dives deep into understanding your brand essence and creative vision. Collaboratively, we outline the storyboard—a visual blueprint that maps out each scene, camera angles, character interactions, and key narrative beats.</p>
            </>
        ),
    },
    {
        icon: <Icon07 />,
        name: (<h5>3D Modeling</h5>),
        txt: (
            <>
                <p>With the storyboard approved, our skilled artists commence the 3D modeling phase.Using cutting-edge software, they sculpt digital models of characters, assets, and environments based on the storyboard specifications.This step focuses on achieving accuracy, detail, and visual appeal while maintaining fidelity to your brand’s identity.</p>
            </>
        ),
    },
    {
        icon: <Icon08 />,
        name: (<h5>Texturing and Rigging</h5>),
        txt: (
            <>
                <p>Once the 3D models are created, they undergo texturing—a process where realistic surfaces, colors, and textures are applied to enhance visual depth and realism. Concurrently, our team rigs the models, assigning digital skeletons and controls that facilitate lifelike movements. This ensures that characters and objects behave naturally during animation.</p>
            </>
        ),
    },
    {
        icon: <Icon06 />,
        name: (<h5>Layout and Animation</h5>),
        txt: (
            <>
                <p>In the layout phase, our animators position the 3D models within digital environments, establishing spatial relationships and camera placements as per the storyboard. Here, animation breathes life into the narrative—each movement and expression is meticulously crafted to convey emotions, actions, and storytelling nuances.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Rendering</h5>),
        txt: (
            <>
                <p>Rendering marks the final stage, where the animated scenes are processed into high-resolution images or frames. We use powerful rendering software and hardware to ensure that every detail—from lighting and shadows to textures and visual effects—is meticulously polished.</p>
            </>
        ),
    },
]
const CtaData = {
    title: "Cutting-edge 3D Animation Services are just a tap away!  ",
    btntxt: "Grab your bag of chips, and let's get the ball rolling!",
}
const SLIDES = [
    {
        name: "Ava Reynolds",
        txt: "Cloud Studios transformed our project with their exceptional digital 3D animation videos. I just loved how they exceeded our expectations by animating as highly realistic animations as possible. I'm grateful for their 3D animation service expertise in bringing our vision to life!",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Lucas Bennett",
        txt: "Working with Cloud Studios was a breeze; HATS off to the team! They are the best 3D animation team as they demonstrated outstanding skill and professionalism throughout the project. They delivered stunning visuals that perfectly captured our brand's story and message.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Harper Mitchell",
        txt: "Cloud Studios' 3D animation service is nothing short of impressive. Their ability to blend creativity with technical precision is remarkable. It was a pleasure collaborating with such a dedicated and talented team. 5 stars for their services!",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Logan Sullivan",
        txt: "I'm thrilled with the results from Cloud Studios Inc. Their 3D animated videos added a new dimension to our marketing campaign, engaging our audience like never before. Their commitment to quality and innovation sets them apart.",
        img: IMG_04.src,
        video: "videos/LogoAnimation3.mp4",
    }
]
export default function Page() {
    return (
        <>
            <Banner />
            <BannerLogos />
            <RatingSec data={ratingData} />
            <ContentSec data={contentData1} />
            <ScrollingLogos data={ScrollData} />
            <ContentSec data={contentData2} />
            <ElevateSec slides={ElevateSlides} data={ElevateData} />
            <CtaSec data={CtaData} />
            <Achievement />
            <Testimonial clients="yes" slides={SLIDES} />
            <Contact data="Become a part of the Cloud Studios revolution and bring out the true essence of your brand." />
        </>
    );
}
