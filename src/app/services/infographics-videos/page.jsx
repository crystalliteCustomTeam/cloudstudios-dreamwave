import BannerLogos from "@/src/components/bannerlogos";
import ContentSec from "@/src/components/commonpages/contentsec";
import RatingSec from "@/src/components/commonpages/ratingse";
import IMG01 from "media/commonpages/infographics-design/img01.webp"
import IMG02 from "media/commonpages/infographics-design/img02.webp"
import IMG03 from "media/commonpages/infographics-design/img03.webp"
import Testimonial from "@/src/app/home/testimonial";
import Achievement from "@/src/app/home/achievement";
import Contact from "@/src/app/home/contact";
import ScrollingLogos from "@/src/components/commonpages/scrollinglogos";
import ElevateSec from "@/src/components/commonpages/elevate";
import CtaSec from "@/src/components/commonpages/cta";
import { Icon06, Icon07, Icon08, Icon09, Icon10 } from "@/src/app-constants";
import MainBanner from "@/src/components/mainbanner";



const banner = {
    rating: "The New Frontier in Animation.",
    star: "yes",
    title: "Convert Data Overload into Actionable Insights with Infographics Design Services",
    txt: (
        <>
            <p> <strong>Drowning in Data Without Results?</strong></p>
            <p>Our infographic design services transform overwhelming data into clear, actionable insights. Address the problem of data fatigue and make your information engaging and easy to digest for better decision-making.</p>
        </>
    ),
    video: "https://player.vimeo.com/video/1001681597?h=7814ae9d9c&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    link: "#"
}
const ratingData = {
    title: "Infographics Design",
    txt: (
        <>
            <ul>
                <li>Transform Data, Numbers & Charts</li>
                <li>Showcase Seamless Visuals & Clarity</li>
                <li>Augment & Engage Clients </li>
                <li>Educate Prospects with Precision </li>
            </ul>
        </>
    ),
    rating: 4.8,
    img: IMG01.src,
    btntxt: "Contact Us Today ",
    link: "#"
}
const contentData1 = {
    title: "Time-Tested Infographics Design Solutions",
    txt: (
        <>
            <p>In the digital sphere – where information overload is the norm, the ability to captivate and engage audiences quickly is crucial. At Cloud Studios Inc., we recognize the efficacy of visual storytelling in cutting through the clutter and conveying complicated ideas simply and influentially. Our infographic design service is created to convert your data into convincing narratives that reach out to the target audience. Infographics have changed information consumption on the internet. They use data, graphics, and narratives to communicate messages effectively; hence, they are suitable for companies who want to break down complex concepts, emphasize vital statistics, or demonstrate processes in an appealing manner. Whether you need the best infographics, various infographics types, chart infographics, or data infographics, our service delivers visually compelling solutions that make your information stand out.</p>
        </>
    ),
    img: IMG02.src,
    btntxt: "Schedule a Meeting",
    link: "#"
}
const ScrollData = {
    title: "Infographics That Enable You to Inform, Educate & Engage",
    subtitle: "Infographics Design ",
    txt: (
        <>
            <p>At Cloud Studios Inc., every project kicks off with a solid understanding of your goals and market. We get that incredible visual storytelling starts with diving into your numbers and figuring out what you want to achieve. Our team is great at creating all kinds of infographic types. Need statistical infographics to turn complex data into clear visuals? Want simple infographics to get your message across with style? No problem! Are you looking for an infographic video to animate your data? We do that, too. Or maybe an infographics list to organize info in an easy-to-follow way? Consider it done!</p>
        </>
    )
}
const contentData2 = {
    title: "Infographics Beyond The Ordinary!",
    txt: (
        <>
            <p>Add a splash of color and a surge of creativity!At Cloud Studios Inc., we’re not just about infographics but about transforming your data into visual adventures. Picture this: your stats dancing across the screen, your ideas popping off the page in vibrant hues. Whether you’re simplifying the complex or jazzing up your next big presentation, our marketing infographics do more than inform—they captivate, educate, and inspire. Ready to turn numbers into narratives and spreadsheets into stories? Our video infographics add motion to your data, while our interactive infographics engage your audience in new ways. From detailed infographic statistics to different types of infographics, we’ve got you covered. Let’s collaborate and bring your data to life like never before. Enter into the world of infographic magic with Cloud Studios Inc. and watch your content strategy soar to new heights! Creating complex concepts, charting numbers, and making spreadsheets is easy for you – making all of the above more straightforward and visually creative for your audience is a piece of cake for us! </p>
        </>
    ),
    img: IMG03.src,
    btntxt: "Make An Animation",
    link: "#"
}
const ElevateData = {
    title: "Solid Infographics Design",
    txt: (
        <>
            <p>At Cloud Studios, we don’t settle for good enough; we strive for extraordinary outcomes. Our team goes above and beyond to provide excellent video animation products. </p>
        </>
    ),
}
const ElevateSlides = [
    {
        icon: <Icon09 />,
        name: (<h5>Data Gathering</h5>),
        txt: (
            <>
                <p>The process begins with meticulous data collection from diverse, reliable sources, ensuring accuracy and relevance to the infographic’s intended message. This stage involves thorough verification and organization of raw data, laying the foundation for informed decision-making during later design and content creation phases.</p>
            </>
        ),
    },
    {
        icon: <Icon07 />,
        name: (<h5>Storyboarding</h5>),
        txt: (
            <>
                <p>Creating a structured outline is crucial to establishing the narrative flow and logical sequence of information within the infographic. This step defines the infographic’s storyline, ensuring critical data points are presented clearly and cohesively and resonate with the target audience.</p>
            </>
        ),
    },
    {
        icon: <Icon08 />,
        name: (<h5>Content Drafting</h5>),
        txt: (
            <>
                <p>Clear and concise content drafting is essential for effectively communicating complex information in a digestible format. Each text is crafted to support the infographic’s overarching theme and key messages, ensuring the information presented is informative and engaging. Drafting is a key process in our inforgraphics design spectrum.</p>
            </>
        ),
    },
    {
        icon: <Icon06 />,
        name: (<h5>Design Conceptualization</h5>),
        txt: (
            <>
                <p>Design conceptualization involves brainstorming visual styles and elements that align with the brand’s identity while enhancing the presentation of data. This stage explores various graphical approaches, considering how different visual elements can effectively convey information and captivate viewers to great heights.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Wireframing</h5>),
        txt: (
            <>
                <p>Wireframing plays a pivotal role in visual planning, outlining the initial layout and structure of the infographics video. It involves sketching the placement of content and visual elements to establish a logical hierarchy and guide the viewer’s journey through the information presented.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Visual Elements Integration</h5>),
        txt: (
            <>
                <p>Integrating visual elements such as charts, graphs, and illustrations is essential for visually representing data and enhancing understanding. These elements are strategically chosen and placed to complement the content, making complex information more accessible and engaging for the audiences and prospects.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Typography and Layout</h5>),
        txt: (
            <>
                <p>Reviewing and revising the infographic involves gathering feedback from stakeholders to refine content accuracy and design coherence. This iterative process ensures the infographic effectively communicates its intended message and meets the project’s objectives. Revising infographics design requires painstaking attention to details.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Review and Revision</h5>),
        txt: (
            <>
                <p>Typography selection and layout arrangement are carefully considered to optimize readability and visual appeal throughout the infographic. The choice of fonts, text sizes, and spacing is tailored to maintain consistency with the brand’s visual identity while ensuring that the text is easily readable.</p>
            </>
        ),
    },
    {
        icon: <Icon10 />,
        name: (<h5>Finalization and Delivery</h5>),
        txt: (
            <>
                <p>The finalization stage focuses on preparing the completed infographics in a high-resolution format suitable for digital or print distribution. Quality assurance checks ensure that the infographics meet all standards of excellence and are ready to be shared with the intended audience.</p>
            </>
        ),
    },
]
const CtaData = {
    title: "Information Overload Turned into Engaging Animation with our Infographics Designs!",
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
            <Contact data="Become a part of the Cloud Studios revolution and bring out the true essence of your brand." />
        </>
    );
}
