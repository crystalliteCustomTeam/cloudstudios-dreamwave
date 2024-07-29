import styles from "@/styles/home/services.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ServicesSlider from "@/src/components/servicesslider"
import Service01 from "media/home/services/2D-Animation.webp"
import Service02 from "media/home/services/3D-Animation.webp"
import Service03 from "media/home/services/Motion-Animation.webp"


const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        name: "Cel Animation",
        txt: "We leverage traditional cel animation techniques with modern efficiency. Our animation video service process involves hand-drawing keyframes on acetate sheets, utilizing industry-standard lightboxes and specialized inking tools. We implement digital scanning and compositing to streamline post-production while maintaining the distinctive line quality and organic movement inherent to cel animation. ",
        img: Service01.src,
        link: "#",
    },
    {
        name: "Architectural Visualization",
        txt: "Our video animation company employs advanced 3D modeling software and physically-based rendering engines to create hyper-realistic architectural visualizations. Our workflow incorporates BIM data integration, parametric modeling, and custom shader development. We utilize global illumination algorithms, volumetric lighting, and accurate material simulations to achieve photorealistic results.",
        img: Service02.src,
        link: "#",
    },
    {
        name: "Hybrid Animation",
        txt: "Our video animation agency has pioneered our hybrid animation techniques, combining vector-based 2D animation with procedural 3D systems. Our proprietary pipeline seamlessly integrates motion capture data with hand-keyed animation, utilizing advanced rigging systems and custom scripting. We employ node-based compositing for complex visual effects integration and leverage particle systems for Hybrid animation.",
        img: Service03.src,
        link: "#",
    }, {
        name: "Real-Time Rendering",
        txt: "Our rendering experts harness the power of real-time rendering using cutting-edge GPUs and optimized shading languages. Our pipeline utilizes deferred rendering techniques, dynamic global illumination, and advanced anti-aliasing methods for high-quality, instantaneous visualizations. We implement level-of-detail (LOD) systems and occlusion culling to optimize rendering performance. ",
        img: Service01.src,
        link: "#",
    },
    {
        name: "3D & 2D Animation",
        txt: "We excel in both 3D and 2D video animation services, utilizing advanced software and techniques. Our process includes modeling, rigging, and rendering for 3D, as well as hand-drawing or vector-based art for 2D. We integrate motion capture for realistic movement in 3D and utilize tweening and frame-by-frame animation for 2D, ensuring a seamless and visually engaging final product.",
        img: Service02.src,
        link: "#",
    },
    {
        name: "Motion Animation",
        txt: "Our motion graphics video animation service combines graphic design principles with animation techniques to create visually compelling content. We use industry-leading software to animate text, shapes, and objects, adding depth and dynamism to your videos. By incorporating kinetic typography and visual effects, we ensure your message is delivered with maximum impact.",
        img: Service03.src,
        link: "#",
    },
    {
        name: "Whiteboard",
        txt: "We specialize in whiteboard animation video services, crafting engaging, hand-drawn visuals that simplify complex ideas. Using digital drawing tablets, we create illustrations in real-time, simulating the traditional whiteboard experience. Our process includes storyboard development, voiceover synchronization, and dynamic transitions to keep viewers captivated and informed.",
        img: Service03.src,
        link: "#",
    },
    {
        name: "Video Editing & Compositing",
        txt: "Our video editing and compositing services enhance and refine your footage with precision. We use state-of-the-art editing software for cutting, color grading, and audio mixing. Our compositing techniques integrate CGI, green screen, and visual effects, resulting in polished and professional videos that tell your story effectively.",
        img: Service03.src,
        link: "#",
    },
    {
        name: "Logo Animations",
        txt: "We bring logos to life with dynamic animations that enhance brand identity. Using advanced motion design software, we animate logos with fluid movements and effects. Our process includes concept development, keyframing, and rendering, ensuring your logo animation is both memorable and visually stunning.",
        img: Service03.src,
        link: "#",
    },
    {
        name: "Infographics",
        txt: "Our animated service for infographics turns data into engaging visual stories. Using a blend of graphic design and animation software, we develop visually appealing charts, graphs, and icons. Our animations highlight vital data points, making complex information easily digestible and memorable for your audience.",
        img: Service03.src,
        link: "#",
    },
    {
        name: "Commercials",
        txt: "Our commercial animated video services are designed to captivate and convert. We utilize high-end animation software to produce visually striking advertisements. Our process includes scripting, storyboarding, animation, and post-production, ensuring a polished final product that effectively communicates your brand message.",
        img: Service03.src,
        link: "#",
    },
    {
        name: "Music Video Animation",
        txt: "We produce animated music videos that complement and enhance musical narratives. Using a mix of 2D and 3D animation techniques, we create visually stunning and rhythm-synchronized animations. Our video animation services cover concept development, animation, and final editing, delivering a unique visual experience that resonates with viewers.",
        img: Service03.src,
        link: "#",
    }
]

const Services = () => {
    return (
        <section className={`${styles.servicesSec} p-100`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12}>
                        <div className={styles.servicesBg} >
                            <h2 className="text-center">Next-Generation Animation and Video Production Services.</h2>
                            <ServicesSlider slides={SLIDES} options={OPTIONS} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services