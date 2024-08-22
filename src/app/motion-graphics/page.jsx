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
import IMG_03 from "media/home/testimonial/test3.webp"
import IMG_04 from "media/home/testimonial/test4.webp"
import MainBanner from "@/src/components/mainbanner";


export const metadata = {
    title: "Boost conversions with motion graphics design – take charge today.",
    description: "The best motion graphics animators at your disposal from Cloud Studios Inc. –experience a full suite of motion graphic animation at unbeatable prices.",
};
const banner = {
    rating: "The New Frontier in Animation.",
    star: "yes",
    title: "Energize Your Content with Motion-Graphics Services",
    txt: (
        <>
            <p><strong>Struggling to Keep Your Audience Interested?</strong></p>
            <p>Our motion graphics services inject energy and creativity into your content. Address the challenge of maintaining viewer interest with dynamic animations that make your message stand out and engage your audience.</p>
        </>
    ),
    video: "videos/MotionGraphics.mp4",
    link: "#"

}
const ratingData = {
    title: "Ditch the static route with powerful motion graphics with Cloud Studios Inc.",
    txt: (
        <>
            <p>The best-in-class motion graphics animation and video solutions – whether you’re looking to augment your brand’s identity, create high-end dynamic explainer videos, or deliver immersive visual experiences for your audiences, our motion graphic animators deliver scalable solutions.</p>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Ciao Static! – Hello, Motion Graphics.",
    txt: (
        <>
            <p>Video and animated content are probable to account for over 81% of all internet traffic flow by 2024, with motion graphics being a key component of this trend. Companies that use motion graphics in their marketing strategies have seen a 49% faster revenue growth compared to those that don’t. At Cloud Studios Inc., our expert motion graphics animators deliver powerful motion graphic animation that can boost your social media engagement by up to 120%. So, what are you waiting for?</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Motion Graphics Beyond the Ordinary.",
    subtitle: "Your Holistic Animation Studio",
    txt: (
        <>
            <p>Motion graphics videos have become indispensable for capturing attention and communicating complex ideas with clarity and engagement At Cloud Studios Inc – a leading motion graphic company, we specialize in creating dynamic and powerful visuals that bring your message to life. With a team of talented animators and designers, we deliver superior motion graphics videos for brands and businesses. Whether you’re launching a new tech product, explaining boring concepts, or improving your brand’s online presence, our motion graphics services are a picture-perfect option.</p>
        </>
    )
}
const contentData2 = {
    title: "Experience Improved Engagement with Motion Graphics.",
    txt: (
        <>
            <p>Studies show that viewers recall 95% of a message when delivered through video, compared to just 10% through textual alternatives alone. This makes motion graphics videos an invaluable tool for boosting engagement and driving conversions. Partner with Cloud Studio as we, as a motion graphic company, transform ideas into video-based narratives that pull senses. Enhance your marketing strategy and stand out in today’s competitive landscape with our innovative motion graphics services. Experience the future of storytelling with Cloud Studios Inc. and see a cloud-like difference in engagement. As we all know, attention spans are getting shorter by the minute. </p>
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
            <p>At Cloud Studios, we don’t settle for good enough; we strive for extraordinary outcomes. The key to our success is our unwavering determination to extract every ounce of potential from even the most tough challenges. </p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon01 />,
        name: (
            <h5>Concept Ideation and Storyboard</h5>
        ),
        txt: (

            <p>Our motion graphics company collaborates closely with clients to distill their brand essence and creative vision into a cohesive narrative blueprint. Using advanced storyboarding tools, we meticulously plan each sequence, specifying the transitions, visual effects, and key moments that form the foundation of compelling motion graphics.</p>
        ),
    },
    {
        icon: <Icon02 />,
        name: (
            <h5>
                Mo-Cap & Performance Optimization
            </h5>
        ),
        txt: (
            <p>We leverage state-of-the-art motion capture technology to infuse our motion graphics with a lifelike, human-centered quality. By accurately translating the nuances of live-action performances into digital motion frames, we preserve the natural fluidity and expressive dynamism that deeply engages viewers.</p>
        ),
    },
    {
        icon: <Icon03 />,
        name: (
            <h5>Procedural Environment Generation</h5>
        ),
        txt: (
            <p>Understanding the importance of spatial depth for immersive motion graphics storytelling, we employ complex procedural techniques to dynamically generate backgrounds, environments, and atmospheric elements. This generative approach allows us to create rich visual backdrops that evolve seamlessly with the narrative.</p>
        ),
    },
    {
        icon: <Icon04 />,
        name: (
            <h5>Immersive Audio Integration with Cinematography</h5>
        ),
        txt: (
            <p>Our motion graphics are enhanced by rich, dramatic audio design. By collaborating with award-winning composers and sound engineers, we craft cinematic soundscapes that amplify the emotional impact. Our audio integration offers a truly immersive experience, with visceral sound effects and compelling musical scores that elevate the visuals.</p>
        ),
    },
    {
        icon: <Icon05 />,
        name: (
            <h5>Integrative Brand Narratives</h5>
        ),
        txt: (
            <>
                <p>The final stage of our motion graphics production is to seamlessly weave the client’s brand identity, messaging, and creative vision into the final content. Our team works closely with in-house branding experts to ensure that each visual element, from transitions to color schemes, captures the essence of the client’s brand.</p>
            </>
        )
    },
]
const CtaData = {
    title: "Engaging Motion Graphic services are just a tap away!",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const SLIDES = [
    {
        name: "Ava Richardson",
        txt: "Their animation motion graphics are nothing short of stunning. The intricate designs and seamless transitions showcase their expertise in motion graphics animation, creating visually captivating videos that resonate deeply with audiences.",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Noah Carter",
        txt: "Partnering with Cloud Studios for our motion graphics video project was a game-changer. Their motion graphic designers crafted animated motion graphics that were not only visually striking but also incredibly engaging, making our content truly stand out.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Chen King",
        txt: "The work of Cloud Studio’s motion graphics animator exceeded all our expectations. Their attention to detail and innovative approach to motion graphics services produced videos that were both technically impressive and emotionally impactful.",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Oliver Bennett",
        txt: "They have redefined what’s possible in motion graphic design, man! Their talented motion graphic artists consistently deliver animated motion graphics that capture our brand’s essence with unparalleled creativity and precision.",
        img: IMG_04.src,
        video: "videos/LogoAnimation3.mp4",
    }
    , {
        name: "Grace Lee",
        txt: "Cloud Studio’s motion graphics service is unmatched in the industry. Their ability to combine storytelling with stunning motion graphics and animation creates an immersive experience that fascinates viewers and leaves a lasting impression.",
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
            <Testimonial tit="See what they are saying about all the cool stuff we do!" clients="yes" slides={SLIDES} />
            <Contact />
        </>
    );
}
