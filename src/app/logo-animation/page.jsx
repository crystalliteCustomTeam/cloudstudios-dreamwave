import BannerLogos from "@/src/components/bannerlogos";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/logo-animation/img01.webp"
import IMG02 from "media/commonpages/logo-animation/img02.webp"
import IMG03 from "media/commonpages/logo-animation/img03.webp"
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
    title: "Professional Logo Animation Services | Make Your Brand Stand Out.",
    description: "Lead the digital frontier with our expert custom logo animation services at Cloud Studios Inc. Elevate your brand presence with professional, captivating visuals that set you apart.",
};

const banner = {
    rating: "The New Frontier in Animation.",
    star: "yes",
    title: "Enhance Brand Visibility with Logo Animation Services",
    txt: (
        <>
            <p> <strong>Struggling to Stand Out in a Crowded Market?</strong></p>
            <p>Our logo animations ensure your brand makes a memorable impression. Overcome the challenge of brand obscurity and increase visibility with animations that reinforce your identity and captivate your audience.</p>
        </>
    ),
    video: "1001681892",
    link: "#"

}
const ratingData = {
    title: "Visually Stunning Animated Logo Designs",
    txt: (
        <>
            <ul>
                <li>Gain a creative edge with animated logo design</li>
                <li>Enhance your brand’s visual appeal</li>
                <li>Hook the audience at a glance.</li>
                <li>Attract the attention of numerous brands </li>

            </ul>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Drive 7x More Attention with Logo Animation",
    txt: (
        <>
            <p>A logo is crucial in building brand identity, serving as the foundation of a strong brand presence. Logo animation is a versatile tool for social media, video content, presentations, events, and other digital platforms. Integrating professional and custom logo animation into your marketing strategy ensures a consistent and cohesive brand image that distinguishes your brand in the competitive market. Whether your business is a start-up or a well-established corporation, maintaining a robust brand image is essential for attracting and retaining customers.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Logo Animation Services to Distinguish Your Brand",
    subtitle: "Let’s Animate Static Logos!",
    txt: (
        <>
            <p>As an animation company for logos production, we can help shape your brand’s initial impression and give it a dynamic makeover.From animated logos to mascots and illustrated logos to flat surfaces, we offer various logo designs for you to choose from.We ensure your brand logo is the first element effectively communicating your business’s essence to the audience. Our team of dedicated and talented graphic designers creates bespoke logos that captivate and excite viewers. Choose Cloud Studios’ logo animation service for brand-centric and passion-driven logos, with various logo types to suit your brand’s unique needs. Contact us to collaborate and select the perfect logo for your brand.</p>
        </>
    )
}
const contentData2 = {
    title: "Embrace a Powerful Brand Image with Custom Logo Animation Services",
    txt: (
        <>
            <p>Incorporating motion into a logo produces a dynamic visual experience that attracts the audience’ s attention, improves visual engagement, and distinctively expresses the brand’s personality, resulting in higher brand awareness and sales. Cloud Studios Inc. is a prominent animation company for logos design that helps your brand to stand out. With our unique logo animation services, we bring your static logo to life with motion graphics, visual effects, and realistic animations. Our approach to advanced logo animation distinguishes us from competitors, and our 3D logo animation service can help you raise your online profile against other enterprises in your industry. As logo animation experts, we specialize in creating a memorable first impression for your brand and looking for animated logo services. Hire a logo animator to increase brand exposure with our services.</p>
        </>
    ),
    img: IMG03.src,
    btntxt: "Make An Animation",
    link: "#"
}
const ElevateData = {
    title: "Our Logo Animation Design Process for Your Seamless Experience",
    txt: (
        <>
            <p>Over the years, we have fine-tuned our simple logo animation process to design great logos for each client, depending on their industry vertical, customer base, and business goals.</p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon09 />,
        name: (<h5>Initial Consultation and Briefing</h5>),
        txt: (
            <>
                <p>We begin the 3D logo animation production with a detailed discussion to understand the client’s brand identity, values, and vision for the animated logo. Gather information on the target audience, intended platforms, and animation style preferences.</p>
            </>
        ),
    },
    {
        icon: <Icon07 />,
        name: (<h5>Concept Development</h5>),
        txt: (
            <>
                <p>Translate the client’s brief into conceptual ideas for the logo animation. Brainstorm various creative approaches, considering motion graphics, typography, color schemes, and visual effects that align with the brand’s personality.</p>
            </>
        ),
    },
    {
        icon: <Icon08 />,
        name: (<h5>Storyboarding</h5>),
        txt: (
            <>
                <p>Create a storyboard outlining the animated logo’s sequence of scenes and transitions. This blueprint visualizes how the logo will animate, ensuring clarity and alignment with the client’s expectations before proceeding to production.</p>
            </>
        ),
    },
    {
        icon: <Icon06 />,
        name: (<h5>Design and Illustration</h5>),
        txt: (
            <>
                <p>Develop the graphical elements of the logo animation, including vector graphics, textures, and 3D models, if applicable. Ensure the design elements are cohesive with the brand’s existing visual identity and resonate with the intended audience.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Animation Production</h5>),
        txt: (
            <>
                <p>Bring the storyboard and design elements to life through animation. This phase involves rigging (if using 3D animation), keyframing, and applying motion to the logo elements according to the storyboard’s sequence.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Sound Design and Effects</h5>),
        txt: (
            <>
                <p>Enhance the custom logo animation with sound effects and background music that complement the brand’s tone and message. Sound design adds depth and enhances viewer engagement, making the animation more memorable.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Review and Iteration</h5>),
        txt: (
            <>
                <p>Present the initial draft of the animated logo to the client for feedback. Incorporate revisions based on client input, ensuring the animation meets their expectations regarding visual impact, message clarity, and brand representation.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Finalization</h5>),
        txt: (
            <>
                <p>Fine-tune the animation based on client feedback, addressing any remaining adjustments or refinements. Ensure that the animation meets technical specifications for various digital platforms and formats.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Delivery and Deployment</h5>),
        txt: (
            <>
                <p>Deliver the final animated logo files to the client in appropriate formats (e.g., MP4, GIF, SVG) for use across digital channels such as websites, social media, presentations, and video content. Provide guidance on optimal deployment strategies.</p>
            </>
        ),
    },

]
const CtaData = {
    title: "Cutting-edge Logo Animation Services are just a tap away! ",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const SLIDES = [
    {
        name: "Martha Carter",
        txt: "Cloud Studios exceeded our expectations with their logo animation service. They transformed our static logo into a dynamic visual experience that perfectly captures our brand’s essence. Hat’s off to the team for the best logo animation services!",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Alexandra Chang",
        txt: "Choosing Cloud Studios for our online logo animation was one of the best decisions for our brand. Their expertise in 3D animation brought our logo to life in ways we couldn’t have imagined. The visually stunning and technically precise animation logo has significantly enhanced our brand’s presence across digital platforms.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Jonas Lee ",
        txt: "Cloud Studios impressed us with their innovative approach to online logo animation. They listened attentively to our brand’s story and vision, translating it into a captivating animated logo.",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Isabella Gomez ",
        txt: "Working with Cloud Studios was a fantastic experience from start to finish. They crafted a bespoke 3D animation logo that perfectly encapsulates our brand’s identity and values. The modern and vibrant animation has elevated our brand’s visibility and recognition.",
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
            <Testimonial clients="yes" slides={SLIDES} />
            <Contact data="Become a part of the Cloud Studios revolution and break the boundaries with our full-service video animation agency." />
        </>
    );
}
