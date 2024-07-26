import { ArrowMenu, Icon01, Icon02, Icon03, Icon04, Icon05, Icon06 } from "@/src/app-constants"
import styles from "@/styles/components/commonpages/elevate.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import ElevateSlider from "@/src/components/commonpages/elevateslider"

const OPTIONS = { align: 'center', dragFree: true, loop: true }
const SLIDES = [
    {
        icon: <Icon01 />,
        name: "Motion Capture and Performance Optimization",
        txt: "We use cutting-edge motion capture technology to give our 2D animations a lifelike, human-centered quality. By precisely converting the tiny details of live-action performances into 2D keyframes, we can maintain the organic fluidity and expressive dynamism that engages viewers on a deeper emotional level. Our team then fine-tunes these digitized movements with unique animation optimization algorithms, effortlessly combining the authenticity of live action with the freedom of motion of hand-drawn animation.",
    },
    {
        icon: <Icon02 />,
        name: "Procedural Environment Generation",
        txt: "Recognizing that spatial depth is essential for immersive 2D storytelling, we use complex procedural techniques to dynamically produce the backgrounds, environments, and atmospheric elements that frame our animated stories. This generative approach enables us to build rich cinematic backdrops that evolve spontaneously in rhythm with the characters' actions, resulting in a genuine sense of three-dimensional space that defies the usual restrictions of 2D animation.",
    },
    {
        icon: <Icon03 />,
        name: "Immersive Audio Integration, Adaptive Cinematography",
        txt: "The use of rich, dramatic audio design enhances our 2D animations. By working collaboratively with award-winning composers and sound engineers, we create cinematic soundscapes that amplify the emotional impact of our animated stories. Our audio integration approach offers a genuinely immersive viewing experience, with visceral sound effects that bring the on-screen action to life and compelling musical soundtracks that accentuate the characters' internal journeys.",
    },
    {
        icon: <Icon04 />,
        name: "Integrative Brand Storytelling",
        txt: "The final stage of our 2D animation production is to seamlessly integrate the client's brand identity, messaging, and creative vision into the final animated content. Our team collaborates closely with in-house branding professionals to ensure that each visual aspect, from character design to color palette, captures the essence of the client's brand. This comprehensive method yields 2D animations that engage the audience and foster deep, long-term ties between the company and its customers.",
    },
    {
        icon: <Icon05 />,
        name: "Concept Ideation and Storyboard",
        txt: "At Cloud Studios, we don't settle for good enough; we strive for extraordinary outcomes. The key to our success is our unwavering determination to extract every ounce of potential from even the most arduous challenges. Our team goes above and beyond to provide excellent video animation products.",
    },
]


const ElevateSec = () => {
    return (
        <section className={`${styles.elevateSec} p-100`}>
            <Container>
                <Row>
                    <Col lg={12} className={`${styles.borderTopStyle} text-center m-auto`}>
                        <h2>How Do We Elevate The Ordinary To The Extraordinary?</h2>
                        <p>At Cloud Studios, we don&#39;t settle for good enough; we strive for extraordinary outcomes. The key to our success is our unwavering determination to extract every ounce of potential from even the most arduous challenges. Our team goes above and beyond to provide excellent video animation products.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <ElevateSlider slides={SLIDES} options={OPTIONS} />
            </Container>
        </section>
    )
}

export default ElevateSec