import BannerLogos from "@/src/components/bannerlogos";
import Banner from "@/src/components/commonpages/banner";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/promotional-videos/img01.webp"
import IMG02 from "media/commonpages/promotional-videos/img02.webp"
import IMG03 from "media/commonpages/promotional-videos/img03.webp"
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
    title: "Utilize the Power of Promo Videos to Deliver Your Brand’s Message Effectively.",
    description: "Transform your marketing strategy with Cloud Studios Inc.’s dynamic promotional videos. Engage your audience and boost conversions effectively with our expert promo video production services.",
};


const ratingData = {
    title: "Excel Sales &  Marketing Practices with Promotional Videos",
    txt: (
        <>
            <ul>
                <li>No Limits to Creativity</li>
                <li>No Actors or Sets Required</li>
                <li>Easy & Quick to Make Changes</li>
                <li>Increased Audience Engagements</li>
                <li>Greater Return on Investments</li>
            </ul>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Let The Promotional Video Do All the Talking!",
    txt: (
        <>
            <p>Animated product promotional animation videos are a powerful tool to simplify complex concepts, making them easily digestible for your audience. They enhance user engagement, boost retention rates, and ultimately drive conversions. By illustrating your product’s features and benefits in a visually appealing manner, our promotional animated videos help build trust and credibility with your customers. Moreover, our animations are optimized for various platforms; this versatility makes it easier to reach a wider audience and enhance your marketing efforts. Whether launching a new product, explaining a service, or educating your customers, our promotional animation videos provide a professional edge that sets you apart from the competition.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Pitch Your Brand’s USP with Powerful Promo Videos",
    subtitle: "Give Your Business A Face Value Your Customer Never Forgets",
    txt: (
        <>
            <p>Reinvent your brand’s marketing campaigns, build customer loyalty, and reinforce your brand with high-quality animated product promotional videos created by Cloud Studios Inc. Our expertly designed animations capture the audience’s attention in just a blink of an eye and convey your unique selling proposition (USP) compellingly. If you want to express your brand’s value proposition interactively – Capitalize on our promotional animation videos and give your brand the exposure it needs. Make your investments with the right video animation company – Cloud Studios Inc., where we help elevate your marketing campaigns, foster customer loyalty, and solidify your brand presence with our top-notch animation services.</p>
        </>
    )
}
const contentData2 = {
    title: "Revolutionize Your Marketing Efforts with Promotional Content ",
    txt: (
        <>
            <p>Transform your marketing campaigns with Cloud Studios Inc.’s attention-grabbing promotional videos. Our animations are designed to increase brand exposure and reach new customers, ensuring your business stands out in a crowded market. By leveraging our tailor-made promotional animations across social media channels to engage a broad audience and maximize impact. Partner with Cloud Studios Inc. to reform your brand and achieve unparalleled marketing success.</p>
        </>
    ),
    img: IMG03.src,
    btntxt: "Make An Animation",
    link: "#"
}
const ElevateData = {
    title: "Sneak Peek to Our 3D Animation Production Process That Drives Results!",
    txt: (
        <>
            <p>Discover the meticulous steps behind Cloud Studios Inc.’s exceptional promo video production process, designed to deliver outstanding results.</p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon09 />,
        name: (<h5>Understanding Your Concept</h5>),
        txt: (
            <>
                <p>At Cloud Studios, we begin by thoroughly understanding your requirements to ensure the final product aligns perfectly with your vision. Our highly qualified experts dive deep into understanding your desired animation style, vision, and brand identity.</p>
            </>
        ),
    },
    {
        icon: <Icon07 />,
        name: (<h5>Storyboard and Sequencing</h5>),
        txt: (
            <>
                <p>The production journey starts with meticulous storyboarding. We create a detailed graphic representation of your animated video, shot by shot. Each frame is carefully illustrated, accompanied by notes that outline the narrative and actions unfolding on screen.</p>
            </>
        ),
    },
    {
        icon: <Icon08 />,
        name: (<h5>Animation</h5>),
        txt: (
            <>
                <p>Harnessing our creative expertise, we bring your storyboard to life in this phase. By integrating voice-overs, illustrations, and scripts, we craft a visually stunning and emotionally engaging animation that captivates your audience and communicates your message effectively.</p>
            </>
        ),
    },
    {
        icon: <Icon06 />,
        name: (<h5>Editing and Post Production</h5>),
        txt: (
            <>
                <p>In the refining phase, we meticulously review the animation, ensuring every detail is polished to perfection. We fine-tune transitions, adjust timing, and incorporate feedback to guarantee a seamless and impactful final product that exceeds your expectations.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Delivery and Feedback</h5>),
        txt: (
            <>
                <p>Upon completion, we will deliver your finalized animation and welcome your feedback. Your satisfaction is our priority, and we’re committed to ensuring the animation aligns with your vision and objectives. </p>
            </>
        ),
    },

]
const CtaData = {
    title: "Cutting-edge promotion videos are just a tap away! ",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const SLIDES = [
    {
        name: "Matthew Roberts",
        txt: "They took our vision and turned it into a masterpiece—a promotional animated video that captured our brand’s essence and resonated deeply with our audience. We look forward to collaborating with Cloud Studios on future projects!",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Samantha Davis",
        txt: "I cannot speak highly enough of Cloud Studios Inc. Their technical expertise in creating high-definition HD promo videos is exceptional. They approached our promotional video project enthusiastically and creatively.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Daniel Evans",
        txt: "Choosing Cloud Studios Inc. for our promotional animation video was one of our best decisions. Their team understood our vision and brought it to life in a way that surpassed all our expectations!",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Victoria Lee",
        txt: "Working with Cloud Studios Inc. was a transformative experience for our marketing team. They took the time to understand our brand’s unique voice and audience, ensuring that every frame of our animation promotional video was crafted to perfection.",
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
            <Contact data="Become a part of the Cloud Studios revolution and kickstart your marketing campaign with eye-catching company promo videos." />
        </>
    );
}
