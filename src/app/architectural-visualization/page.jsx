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
    title: " Cutting-edge architectural visualization solutions taken to the next level.",
    description: "Say goodbye to all spatial and resourcing constraints with our state-of-the-art 3d architectural visualization solutions geared to perfection. We enable contractors and enterprises to expand their businesses with pioneering architectural visualization.",
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
    video: "videos/3d-animations.mp4",
    link: "#"

}
const ratingData = {
    title: "Revolutionize Your Business with Cutting-Edge Architectural Visualization.",
    txt: (
        <>
            <p>We specialize in transforming architectural concepts into stunning visual creations. Our expertise in Architectural 3D Visualization empowers architects, designers, and developers to present their visions with unrivaled clarity and ‘echoing’ impact.</p>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Present Big Ideas with 3D Architectural Visualization",
    txt: (
        <>
            <p>Discover Cloud Studios Inc. – your premier Architectural Visualization Company. We specialize in 3D Architectural Visualization services, transforming concepts into stunning visual realities for architects, designers, and developers. Our state-of-the-art techniques and tools enable us to deliver stunning visuals that capture every detail of your project, boosting your appearance. Our Architectural Visualization Services are designed to meet and exceed your expectations with each project we deliver.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "3D Architectural Visualization Pushing the Industry.",
    subtitle: "Your Holistic Animation Studio",
    txt: (
        <>
            <p>We believe every project is unique, and we tailor our Architectural Visualization Services to meet your needs. Whether you’re an architect, designer, or developer, our comprehensive 3D Architectural Visualization solutions are designed to elevate your presentations and marketing efforts. What sets us apart from other architectural visualization companies is our advanced 3D rendering, which uses cutting-edge graphic engines and custom hardware. Take the animation route today to enhance your projects and maximize your business ROI.</p>
        </>
    )
}
const contentData2 = {
    title: "Experience Multi-channel Success Through Video Animation",
    txt: (
        <>
            <p>Studies show that high-quality 3D renderings and virtual tours can increase engagement rates by up to 50% in real estate listings, leading to quicker sales and higher property values. We create photorealistic renderings, immersive virtual reality tours, and dynamic animations that bring your designs to life, allowing clients and stakeholders to experience your projects in a fully interactive environment. As a trusted 3D architectural visualization company, our animation studio is dedicated to pushing the boundaries of what’s possible in architectural visualization. Our 3D architectural visualization can accelerate the design and approval process by up to 30%, allowing developers and architects to bring projects to market faster.</p>
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
            <h5>Consultation and Requirement Gathering</h5>
        ),
        txt: (

            <p>We begin by engaging with clients to understand their project’s goals and design vision. We gather all necessary data through detailed discussions and advanced collaboration tools, including architectural plans and specifications, ensuring our 3D Architectural Visualization Services align perfectly with your objectives.</p>
        ),
    },
    {
        icon: <Icon02 />,
        name: (
            <h5>
                Conceptual Design and Modeling
            </h5>
        ),
        txt: (
            <p>Our experts create initial 3D models using state-of-the-art software like Autodesk 3ds Max and SketchUp. This phase involves crafting accurate digital representations of your designs, integrating textures, and considering lighting effects to ensure realism and precision, setting the foundation for our Architectural Visualization Services.</p>
        ),
    },
    {
        icon: <Icon03 />,
        name: (
            <h5>Rendering and Refinement</h5>
        ),
        txt: (
            <p>Our team utilizes cutting-edge rendering engines such as V-Ray and Unreal Engine to produce photorealistic visuals. We focus on enhancing detail, color, and light dynamics, ensuring the renderings vividly capture every design aspect. Iterative feedback loops with clients guarantee refinements align with expectations.</p>
        ),
    },
    {
        icon: <Icon04 />,
        name: (
            <h5>Virtual Reality Integration</h5>
        ),
        txt: (
            <p>For an immersive experience, we incorporate virtual reality elements using platforms like Oculus Rift. This enables stakeholders to explore the architectural designs interactively, offering a dynamic perspective that enhances understanding and engagement, a hallmark of our 3D Architectural Visualization Services.</p>
        ),
    },
    {
        icon: <Icon05 />,
        name: (
            <h5>Final Delivery and Support</h5>
        ),
        txt: (
            <>
                <p>We deliver the completed visualizations in various formats suitable for presentations, marketing, and stakeholder meetings.Our ongoing support ensures all technical queries are addressed promptly.Clients receive access to our online portal for seamless communication and updates, ensuring satisfaction with our Architectural Visualization Studio.</p>
            </>
        )
    },
]
const CtaData = {
    title: "Cutting-edge 3D rendering and architectural visualization are just a tap away!",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const SLIDES = [
    {
        name: "Jordan Kahn",
        txt: "Cloud Studios Inc. has completely revolutionized our approach to design presentation. Their 3D visualization services are unmatched in quality and innovation, consistently impressing our clients and stakeholders. We are thrilled to partner with such a forward-thinking team.",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "James Atchison",
        txt: "Cloud Studios transformed our architectural concepts into breathtaking visuals that exceeded our expectations. Their attention to detail and commitment to excellence is unmatched.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Larry",
        txt: "Working with Cloud Studios was a game-changer for our development projects. Their 3D renderings and virtual tours helped us secure approvals and engage clients like never before.",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Alex",
        txt: "Cloud Studios is our go-to partner for architectural visualization. Their innovative approach and stunning visuals consistently elevate our designs and presentations.",
        img: IMG_04.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Samantha Jonas Doppler",
        txt: "The team’s creativity and technical expertise are evident in every project they deliver. The studio is simply the best in the business.",
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
