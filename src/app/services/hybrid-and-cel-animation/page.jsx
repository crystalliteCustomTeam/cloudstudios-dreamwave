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
import MainBanner from "@/src/components/mainbanner";



const banner = {
    rating: "The New Frontier in Animation.",
    star: "yes",
    title: "Blend Traditional and Modern for Unique Results with Hybrid and Cel Animation Services",
    txt: (
        <>
            <p> <strong>Stuck in a Creative Rut?</strong></p>
            <p>Our hybrid and cel animations combine traditional techniques with modern innovation to deliver fresh, unique results. Overcome creative stagnation and revitalize your content with animations that stand out.</p>
        </>
    ),
    video: "https://player.vimeo.com/video/1001681128?h=2c68190e0a&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    link: "#"
}
const ratingData = {
    title: "Groundbreaking Hybrid and Cel Animation for Brands.",
    txt: (
        <>
            <p>From Hybrid Video Animations to Cel-Shaded Animation, we offer various services tailored to meet the diverse needs of filmmakers, advertisers, and content creators. Our Hybrid Animation Services are designed to capture the essence of your vision, utilizing cutting-edge technology and software to produce high-quality visuals.</p>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Achieve Cross-Platform Success with Hybrid Animation.",
    txt: (
        <>
            <p>At Cloud Studios Inc., the worlds of technology and tradition collide to create breathtaking Hybrid and Cel Animations. As a leader in the video animation industry, we focus on combining the best of both 2D and 3D Hybrid Animation to produce captivating visuals that engage and inspire audiences. Our unique approach seamlessly blends traditional Cel Animation techniques with modern digital artistry, offering unmatched creative potential for your projects. In a rapidly evolving market, Cloud Studios Inc. stands out as a premier Hybrid Animation Studio, delivering innovative solutions that push the boundaries of storytelling. </p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "We are Pioneering ‘Hybrid and Cel-Animation.’",
    subtitle: "Your Holistic Animation Studio.",
    txt: (
        <>
            <p>Our Hybrid Animation Services are designed to capture the essence of your vision. We utilize cutting-edge technology and software to produce high-quality visuals that resonate with viewers. By blending Live-Action Hybrid Animated sequences with traditional techniques, we create immersive experiences that elevate your brand and captivate your audience. With a commitment to excellence and innovation, Cloud Studios Inc. is your go-to partner for all things animation.</p>
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
            <p>Studies show that animated content can increase viewer engagement by up to 80% and improve information retention by 60%. Cloud Studios Inc. leverages these insights to deliver compelling Hybrid Video Animations that elevate storytelling and drive brand success. The use of Hybrid Animation combining 2D and 3D elements has been proven to enhance visual appeal, with 73% of marketers reporting a positive impact on campaign effectiveness. Our Cel Animation Services offer a nostalgic yet innovative approach, capturing the charm of traditional animation while incorporating modern techniques. As one of the leading Hybrid Animation Studios, Cloud Studios Inc. excels in creating visually stunning content that stands out in a competitive market. Research indicates that 90% of consumers prefer brands with creative storytelling.</p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon01 />,
        name: (
            <h5>
                Conceptualization and Storyboarding
            </h5>
        ),
        txt: (
            <p>We begin by examining your project goals and ideas in depth. Using industry-standard tools like Toon Boom Harmony and Adobe Animate, we create detailed storyboards and concept art that set the stage for your Hybrid Animation or Cel Animation project.</p>
        ),
    },
    {
        icon: <Icon02 />,
        name: (
            <h5>
                Design and Development
            </h5>
        ),
        txt: (
            <p>Our artists develop intricate designs and characters, blending traditional drawing techniques and digital tools. This phase involves crafting detailed animation cels, layering them to create fluid motion, and integrating 2D and 3D elements for a dynamic visual experience.</p>
        ),
    },
    {
        icon: <Icon03 />,
        name: (
            <h5>Animation and Integration</h5>
        ),
        txt: (
            <p>We bring your animations to life using advanced software such as Blender and After Effects. Whether it’s a Cel-Shaded Animation or a Live Action Hybrid, we ensure seamless integration and synchronization, focusing on movement fluidity and visual appeal.</p>
        ),
    },
    {
        icon: <Icon04 />,
        name: (
            <h5>Refinement and Effects</h5>
        ),
        txt: (
            <p>Our team adds finishing touches with meticulous attention to detail. From color correction to lighting effects, we enhance each frame to achieve a polished and professional look. Special effects are layered to enhance depth and realism, elevating the animation quality.</p>
        ),
    },
    {
        icon: <Icon05 />,
        name: (
            <h5>Review and Delivery</h5>
        ),
        txt: (
            <>
                <p>We conduct thorough reviews to ensure your satisfaction. Feedback loops guarantee alignment with your vision, and once approved, we deliver the final product in various formats. Our ongoing support ensures that your animation continues to meet your needs and expectations.</p>
            </>
        )
    },
]
const CtaData = {
    title: "Cutting-edge CGI and VFX Solutions are just a tap away!",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
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
