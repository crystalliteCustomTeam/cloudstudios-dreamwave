import BannerLogos from "@/src/components/bannerlogos";
import Banner from "@/src/components/commonpages/banner";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/explainer-videos/img01.webp"
import IMG02 from "media/commonpages/explainer-videos/img02.webp"
import IMG03 from "media/commonpages/explainer-videos/img03.webp"
import Testimonial from "@/src/app/home/testimonial";
import Achievement from "@/src/app/home/achievement";
import Contact from "@/src/app/home/contact";
import ScrollingLogos from "@/src/components/commonpages/scrollinglogos";
import ElevateSec from "@/src/components/commonpages/elevate";
import CtaSec from "@/src/components/commonpages/cta";
import { Icon06, Icon07, Icon08, Icon09, Icon10 } from "@/src/app-constants";
import IMG_01 from "media/home/testimonial/test1.webp"
import IMG_02 from "media/home/testimonial/test2.webp"
import IMG_03 from "media/home/testimonial/test3.webp"
import IMG_04 from "media/home/testimonial/test4.webp"
import MainBanner from "@/src/components/mainbanner";


export const metadata = {
    title: "Accelerate Your Success Through Affordable Explainer Video Production Services",
    description: "Discover Cloud Studios’ expertly crafted explainer videos that simplify complex ideas precisely. From concept to creation, we transform ideas into engaging visual stories that captivate audiences and amplify your brand’s impact.",
};
const banner = {
    rating: "The New Frontier in Animation.",
    star: "yes",
    title: "Clarify Complex Messages with Explainer Videos Services",
    txt: (
        <>
            <p> <strong>Confused Customers Affecting Sales?</strong></p>
            <p>Our explainer videos simplify complex concepts and make your message crystal clear. Combat the challenge of customer confusion and improve conversion rates with videos that drive understanding and action.</p>
        </>
    ),
    video: "videos/ExplainerVideos.mp4",
    link: "#"

}
const ratingData = {
    title: "Generate More Income with Immersive Explainer Videos",
    txt: (
        <>
            <ul>
                <li>Specialists in converting scripts</li>
                <li>Work with the best voice actors</li>
                <li>Pocket Friendly explainer video animation company</li>
                <li>video 100% customer satisfaction</li>
            </ul>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Clarify, Captivate & Convert Your Audience",
    txt: (
        <>
            <p>A corporate explainer video is a short video that uses a simple and engaging approach to explain or communicate how a brand, business, or service works.These screencast explainer videos and typography explainer videos are commonly utilized as marketing video content to illustrate the benefits of a product or service, ultimately boosting conversions.Explainer video productions employ videos as the modern version of a company’s elevator pitch for any product or service with clear, objective, crisp, short, and laser-focused content. Successful explainer video animations communicate the product’s value in the quickest possible time while capturing people’s attention. </p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Complex Concepts Turned into Simple Videos ",
    subtitle: "Let Us Explain What You Do In 60 Seconds",
    txt: (
        <>
            <p>You might wonder how you can understand something that usually takes many pages in less than 60 seconds.The answer is simple!A B2b explainer video’s audio and visual nature of the content makes it simple to communicate the message promptly. So, if you have a lengthy list of do’s and don’ts of some things, a 60-second 3D or 2D explainer video will do the trick for you. These videos transform lengthy guidelines into clear, engaging content using customizable templates. Our expertise in explainer video animation ensures that intricate ideas are communicated effectively, utilizing narrative-driven characters to simplify complexity. As a premier animation studio, we excel in delivering high-quality whiteboard explainer videos and value-driven motion graphics explainer video content that captivates and educates, enhancing your brand’s communication strategy.</p>
        </>
    )
}
const contentData2 = {
    title: "Revolutionize Your Storytelling with Top-Tier Explainer Videos",
    txt: (
        <>
            <p>Build customer loyalty, drive engagement, and attract new audiences with outstanding product explainer videos created by Cloud Studios Inc. Our videos effectively explain your product, increasing conversion rates and turning users into loyal customers. By making your product stand out, we enhance brand awareness and build rapport with your audience. These high-quality 3d explainer videos boost ROI by engagingly showcasing new products, services, or brands. Additionally, they simplify complex concepts, educate your audience, and provide clear tutorials with the power of 2D and 3D animation. Enhance your sales and marketing campaigns with an expertly crafted product explainer video designed to captivate and convert.</p>
        </>
    ),
    img: IMG03.src,
    btntxt: "Make An Animation",
    link: "#"
}
const ElevateData = {
    title: "Our Proven Approach to Expanding Your Brand",
    txt: (
        <><p>We take the lead on all the explainer videos production projects from the outset, ensuring that our highly talented explainer video producers manage each phase effectively and successfully.</p></>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon09 />,
        name: (<h5>Conceptualization</h5>),
        txt: (
            <>
                <p>At Cloud Studios Inc., we begin by inviting you to pitch your ideas. Our expert brainstorming explainer video creators dive deep into understanding your vision and objectives. Through collaborative sessions, we refine concepts, explore creative possibilities, and strategize the best approach to bring your ideas to life.</p>
            </>
        ),
    },
    {
        icon: <Icon07 />,
        name: (<h5>Writing Scripts</h5>),
        txt: (
            <>
                <p>Once your concept is solidified, our skilled writers take the reins.They meticulously craft a compelling script that effectively communicates your message.Analyzing every detail of your idea ensures clarity, engagement, and alignment with your brand’s voice. Whether a narrative-driven script or a direct, informative approach.</p>
            </>
        ),
    },
    {
        icon: <Icon08 />,
        name: (<h5>Storyboarding</h5>),
        txt: (
            <>
                <p>Storyboarding is where your animation journey takes shape. We meticulously plan every step and phase of your animation process. From defining dialogues and character designs to mapping out audio effects and visual elements, our storyboard artists create a blueprint that guides the entire explainer video production.</p>
            </>
        ),
    },
    {
        icon: <Icon06 />,
        name: (<h5>Voice-over and Finishing Touches</h5>),
        txt: (
            <>
                <p>We seamlessly integrate all elements into a polished animation as we near completion.An explainer video creator works with professional voiceover services that complement your video’s narrative. Whether you use voice overs or opt for a script-based approach, we ensure every detail is perfected.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Rendering and Animation</h5>),
        txt: (
            <>
                <p>Using cutting-edge tools and software, we start the animation process. A skilled explainer video producer breathes life into your project, meticulously crafting each frame perfectly. We utilize industry-leading rendering techniques to ensure your visuals show stunning and technically flawless motion graphics explainer videos on the screen.</p>
            </>
        ),
    },
]
const CtaData = {
    title: "Cutting-edge Explainer Video Animation Services are just a tap away!",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const achievementData = {
    title: "See the Buzz Around Our Awards and Client Testimonials!",
    txt: "Cloud Studios Inc. is thrilled to have received an impressive 11x Telly Awards, 9x Muse Awards, and 12-time Davey Award winner status.These awards highlight our strong commitment to quality as we continue to deliver awe-inspiring video experiences that exceed our client's wildest expectations."
}
const SLIDES = [
    {
        name: "Sophie Harper",
        txt: "Cloud Studios Inc. nailed it with their company explainer videos! They took our complex product and made it easy to understand and fun to watch. Our engagement skyrocketed, and we're seeing more customers sticking around.",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Liam Collins",
        txt: "Shoutout to Cloud Studios Inc. for bringing our ideas to life with the awesome making of explainer videos. Their innovative approach to creating the best explainer videos truly brought our vision to life.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Ava Mitchell",
        txt: "Cloud Studios Inc. exceeded our expectations with their stunning custom explainer videos. The 2D and 3D animation combination was spot on and communicated our message flawlessly. Our clients loved them, too!",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Noah Rodriguez",
        txt: "Big props to Cloud Studios Inc. for being the best explainer video maker in town. They helped us stand out with their awesome corporate explainer videos! Our sales have increased, and the feedback on the videos has been awesome.",
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
            <Contact data="Become a part of the Cloud Studios revolution, and let’s explain your brand together." />
        </>
    );
}
