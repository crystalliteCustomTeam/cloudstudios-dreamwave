import BannerLogos from "@/src/components/bannerlogos";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/whiteboard-animation/img01.webp"
import IMG02 from "media/commonpages/whiteboard-animation/img02.webp"
import IMG03 from "media/commonpages/whiteboard-animation/img03.webp"
import Testimonial from "@/src/app/home/testimonial";
import Achievement from "@/src/app/home/achievement";
import Contact from "@/src/app/home/contact";
import ScrollingLogos from "@/src/components/commonpages/scrollinglogos";
import ElevateSec from "@/src/components/commonpages/elevate";
import CtaSec from "@/src/components/commonpages/cta";
import { Icon06, Icon07, Icon09, Icon10, Icon11 } from "@/src/app-constants";
import IMG_01 from "media/home/testimonial/test1.webp"
import IMG_02 from "media/home/testimonial/test2.webp"
import IMG_03 from "media/home/testimonial/test3.webp"
import IMG_04 from "media/home/testimonial/test4.webp"
import MainBanner from "@/src/components/mainbanner";


export const metadata = {
    title: "Simple is better – experience the best-in-class whiteboard animation solutions today!",
    description: "Take charge today – Cloud Studios Inc.’s whiteboard animation solution is here to clarify your branding and identity. Our expert team delivers seamless, easy-to-understand animations that simplify complex ideas.",
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
    video: "videos/whiteboard-animations.mp4",
    link: "#"

}
const ratingData = {
    title: "Whiteboard Animation Services for Effective & Clear Messaging",
    txt: (
        <>
            <ul>
                <li>A team of expert animators</li>
                <li>24/7 customer support</li>
                <li>Latest animation technologies</li>
                <li>Affordable pricing for all animations</li>
            </ul>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Industry-Focused Whiteboard Animations Services",
    txt: (
        <>
            <p>Unlock the true potential of whiteboard animation video with Cloud Studios Inc. Experience whiteboard animation services that are more than perfect for educational content, corporate training, marketing campaigns, social media, product demos, and more – communicate your ideas with clarity, precision, and creativity. Contact us today to start your next whiteboard animation project and educate your audiences.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Professional Whiteboard Animation",
    subtitle: "Tailored Solutions for Every Industry",
    txt: (
        <>
            <p>Have you ever seen a video where a hand holding a marker or pen sketches out static images on a white screen, accompanied by a voiceover educating the audience?That’s a whiteboard animation video in action. These videos are structured, narrative-driven, and designed to educate your audience on various topics. They tell a complete story with engaging elements, and the charming cartoon characters set a hypnotic tone that captures viewers’ attention</p>
        </>
    )
}
const contentData2 = {
    title: "Deliver your message with the ultimate clarity with Custom Whiteboard Animation Solutions",
    txt: (
        <>
            <p>Allow us to create compelling whiteboard animations that perfectly convey your brand story to your audience. Cloud Studios Inc. is an award-winning whiteboard animation company that specializes in transforming complex ideas into explicit, engaging, and educative content. Perfect for any platform, our animations capture attention and drive engagement. Let us redesign your brand’s story into a dynamic whiteboard animation video that speaks directly to your audience. Get ready to send the right message with clarity and impact. Contact Cloud Studios Inc. today and make your brand break barriers.</p>
        </>
    ),
    img: IMG03.src,
    btntxt: "Make An Animation",
    link: "#"
}
const ElevateData = {
    title: "How we deliver excellent whiteboard animation solutions?",
    txt: (
        <>
            <p>We have honed the art of professional whiteboard animation videos and constantly deliver animation products that enable brands to break frontiers.</p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon09 />,
        name: (<h5>Conceptualization And Scriptwriting</h5>),
        txt: (
            <>
                <p>Our process begins with a thorough comprehension of your message and objectives. Our skilled scriptwriters work together with you to create an engaging narrative that conveys your significant concepts clearly and precisely. We prioritize writing a short, engaging script that meets your target audience’s preferences.</p>
            </>
        ),
    },
    {
        icon: <Icon07 />,
        name: (<h5>Storyboarding And Illustration</h5>),
        txt: (
            <>
                <p>Once the script is complete, we turn it into a thorough storyboard. Our experienced artists create bespoke drawings to visually reflect your story, ensuring that each frame aligns with the script’s narrative. These hand-drawn visuals are intended to be informative and entertaining, enhancing the viewer’s understanding and retention.</p>
            </>
        ),
    },
    {
        icon: <Icon11 />,
        name: (<h5>Animation And Voiceover</h5>),
        txt: (
            <>
                <p>Our expert animators bring the storyboard to life, incorporating fluid movements and ideal transitions to keep viewers engaged. This step entails using advanced animation software and techniques to produce high-quality whiteboard animation videos. We combine animation with professional voice overs resonating with brand personas.</p>
            </>
        ),
    },
    {
        icon: <Icon06 />,
        name: (<h5>Review And Refinement</h5>),
        txt: (
            <>
                <p>We put collaboration and client happiness first throughout the whole whiteboard video animation process. After the initial animation is completed, we allow you to review it and provide feedback. Our team is dedicated to making necessary changes and adjustments to guarantee that the final result meets your expectations.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Delivery And Deployment</h5>),
        txt: (
            <>
                <p>Once the animation is finalized and approved, we deliver high-quality whiteboard animation videos optimized for use across multiple platforms. Our animations are created to maximize reach and engagement, whether for your website, social media channels, presentations, or other digital platforms. We offer the completed animations in various formats and resolutions.</p>
            </>
        ),
    },

]
const achievementData = {
    title: "Proud of Our Success: Discover Our Awards and Achievements",
    txt: "We have been knocking projects right, front and center, delivering out-of-this-world video animation solutions. From bagging impressive Muse, Davey & Telly Awards – we continue to deliver the new generation of animation solutions to our clients to exceed their wildest expectations!"
}
const CtaData = {
    title: "Seamless Whiteboard Animation Services are just a tap away! ",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const SLIDES = [
    {
        name: "Alex Jordan",
        txt: "Cloud Studios’ whiteboard animation service is a game-changer. They blend detailed illustrations with smooth motion, making complex ideas easy to grasp. Their innovative approach and technical skills are top-notch!",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Riley Harper",
        txt: "Stunning work by Cloud Studios! Their whiteboard animation service helped me simplify complicated concepts with engaging visuals and crisp voiceovers. It is a perfect blend of creativity and technical precision.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Jordan Lee",
        txt: "I’m more than impressed by these guys at Cloud Studios Inc.! Their whiteboard animation videos are visually captivating and clear. They turn complex messages into engaging stories effortlessly. Exceptional technical execution!",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Taylor Brooks",
        txt: "Cloud Studios nailed it with their whiteboard video animation services. Sharp, creative, and technically flawless. They make intricate ideas easy to understand and enjoyable to watch!",
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
            <Achievement data={achievementData} />
            <Testimonial clients="yes" slides={SLIDES} />
            <Contact data="Become a part of the Cloud Studios revolution and deliver your brand’s message with perfect symmetry and clarity." />
        </>
    );
}
