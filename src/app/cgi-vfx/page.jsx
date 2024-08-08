import BannerLogos from "@/src/components/bannerlogos";
import Banner from "@/src/components/commonpages/banner";
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
import IMG_01 from "media/home/testimonial/1.png"
import IMG_02 from "media/home/testimonial/2.png"
import IMG_03 from "media/home/testimonial/3.png"
import IMG_04 from "media/home/testimonial/4.png"


export const metadata = {
    title: "Cloud Studios Inc | Cutting-Edge CGI Animation and VFX Services",
    description: "Explore Cloud Studios Inc.’s innovative CGI animation and VFX services. Elevate your projects with stunning visuals and unparalleled creativity. Contact us today to turn all your dreams into cinematic realities.",
};


const ratingData = {
    title: "CGI and VFX solutions that immerse your audiences like nothing else.",
    txt: (
        <>
            <p>As an industry leader, we specialize in producing breathtaking visuals that magnetize audiences and take storytelling to new heights. If you are a filmmaker, game developer, or advertising agency, our expertise in 3D CGI Animation and VFX will bring your creative visions to life.</p>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: " Go Beyond the Norm with CGI and VFX Solutions!",
    txt: (
        <>
            <p>Our CGI Animation Services incorporate a wide range of applications, from animated films and video games to commercials and architectural visualizations. Our VFX team is equally adept at creating jaw-dropping effects that enhance narratives and leave a lasting impact. With a collaborative approach, we work closely with our clients to ensure their visions are fully realized, leveraging our expertise to offer innovative solutions that exceed expectations. Cloud Studios Inc. stands out among CGI Animation Companies for our promise to innovation and excellence.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "All Dreams Turned into Realities with CGI and VFX Solutions",
    subtitle: "Your Holistic Animation Studio",
    txt: (
        <>
            <p>Our CGI Animation Services encompass a wide range of applications, from animated films and video games to commercials and architectural visualizations. Our VFX team is equally adept at creating jaw-dropping effects that enhance narratives and leave a lasting impact. With a collaborative approach, we work closely with our clients to ensure their visions are fully realized, leveraging our expertise to offer innovative solutions that exceed expectations.</p>
        </>
    )
}
const contentData2 = {
    title: "Experience Multi-channel Success Through Video Animation",
    txt: (
        <>
            <p>Cloud Studios Inc. is at the forefront of the CGI animation and VFX industry, a market projected to reach $48 billion by 2026 with a CAGR of 8.5%. Our cutting-edge CGI Animation Services and VFX Solutions help businesses and creators stay ahead in a rapidly growing field. Research shows that high-quality CGI and VFX can boost audience engagement by up to 60% and improve brand recall by 30%. By harnessing the latest technology, such as Autodesk Maya and Nuke, Cloud Studios Inc. delivers Realistic CGI Animation that captivates and retains viewers. In the gaming industry, where over 60% of players say that realistic graphics are crucial to their experience, our 3D CGI Animation services enhance immersion and enjoyment.</p>
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
            <p>At Cloud Studios, we don’t settle for good enough; we strive for extraordinary outcomes. The key to our success is our untiring determination to extract every ounce of potential from even the most tough challenges.</p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon01 />,
        name: (
            <h5>Initial Consultation and Concept Development</h5>
        ),
        txt: (

            <p>We kick off by understanding your project’s vision and requirements. Our team collaborates with you to develop a concept that aligns with your goals, using industry-leading tools like Maya and Blender to create initial sketches and storyboards.
            </p>
        ),
    },
    {
        icon: <Icon02 />,
        name: (
            <h5>
                3D Modeling and Animation Design
            </h5>
        ),
        txt: (
            <p>Our artists craft detailed 3D models and animations using advanced software such as Cinema 4D and Houdini. This step involves creating realistic textures, rigging characters, and choreographing movement to ensure lifelike animations that captivate viewers.</p>
        ),
    },
    {
        icon: <Icon03 />,
        name: (
            <h5>VFX Integration and Simulation</h5>
        ),
        txt: (
            <p>Our VFX specialists enhance your project with stunning visual effects, utilizing software like Nuke and After Effects. From particle simulations to dynamic lighting, we incorporate VFX elements that seamlessly blend with the animation, elevating the overall experience.</p>
        ),
    },
    {
        icon: <Icon04 />,
        name: (
            <h5>Rendering and Compositing</h5>
        ),
        txt: (
            <p>Using powerful rendering engines like V-Ray and Arnold, we produce high-quality visuals that bring your project to life. Our team meticulously composites each frame, ensuring flawless integration of CGI and VFX components for a cohesive final product.</p>
        ),
    },
    {
        icon: <Icon05 />,
        name: (
            <h5>Review and Final Delivery</h5>
        ),
        txt: (
            <>
                <p>We conduct thorough reviews to guarantee quality and precision. Feedback loops ensure your satisfaction, and upon approval, we deliver the final product in your preferred format. Our commitment to excellence extends beyond delivery, offering ongoing support for all your animation and VFX needs.</p>
            </>
        )
    },
]
const CtaData = {
    title: "Cutting-edge CGI and VFX Solutions are just a tap away!",
    btntxt: "Grab your bag of chips, and let’s get the ball rolling!",
}
const SLIDES = [
    {
        name: "Chris Tenny",
        txt: "Cloud Studios Inc. transformed our creative concepts into visual masterpieces. Their attention to detail and innovative approach to CGI Animation is unmatched. We couldn't be happier with the results.",
        img: IMG_01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Taylor",
        txt: "Our video game project was elevated by Cloud Studios Inc.'s stunning 3D CGI Animation. Their team's creativity and technical expertise made a significant impact on our gameplay experience.",
        img: IMG_02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Alex Jonas",
        txt: "Cloud Studios Inc. is our go-to CGI Animation Studio. Their ability to deliver high-quality animations and VFX under tight deadlines is a testament to their professionalism and dedication.",
        img: IMG_03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Sam",
        txt: "The seamless integration of VFX in our commercial project was truly impressive. Cloud Studios Inc. exceeded our expectations and helped us achieve a compelling visual narrative.",
        img: IMG_04.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: "Jordan Lime",
        txt: "Working with Cloud Studios Inc. was a fantastic experience. Their CGI Animation Services brought our architectural visualization project to life, impressing our clients and stakeholders.",
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
            <Testimonial tit="See what they are saying about all the cool stuff we do!" clients="yes" slides={SLIDES} />
            <Contact />
        </>
    );
}
