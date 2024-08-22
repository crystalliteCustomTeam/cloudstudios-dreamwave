import { Col, Container, Row } from 'react-bootstrap'
import styles from "./styles/services.module.scss"
import IMG01 from "media/lp/explainer-video-animation/services/services1.jpg"
import SliderServices from './sliderservices'


const OPTIONS = { loop: true }
const SLIDES = [
    {
        title: "2D Animation Service",
        txt: "2D animation involves creating movement in a two-dimensional space, offering a timeless and versatile visual experience. Our service leverages the simplicity and charm of hand-drawn elements to craft engaging and visually stunning animations. This approach allows for clear and effective communication, perfect for explainer videos, marketing campaigns, and educational content. By focusing on high-quality, captivating animations, we ensure that your message resonates with your audience and leaves a lasting impression.",
        img: IMG01.src,
    }, {
        title: "3D Animation Services",
        txt: "Our 3D animation services are not just visuals; they're an immersive experience that propels your brand into the future. Our skilled team of 3D artists and visionaries transform concepts into living, breathing narratives that captivate audiences.",
        img: IMG01.src,
    },
    {
        title: "Cel Animation Services",
        txt: "With Cel Animation, we seamlessly merge traditional hand-drawn Cel animation techniques with cutting-edge digital elements. This dynamic fusion results in visuals that not only pay homage to the timeless charm of Cel animation but also push the boundaries of innovation.",
        img: IMG01.src,
    }, {
        title: "Architectural Visualization Services",
        txt: "At the intersection of innovation and aesthetics, our Architectural Visualization Services go beyond rendering structures; they create visual stories that resonate. Whether it's a residential project, commercial space, or urban development.",
        img: IMG01.src,
    }, {
        title: "Hybrid Animation Service",
        txt: "Oborderur 3D animation services are not just visuals; they're an immersive experience that propels your brand into the future. Our skilled team of 3D artists and visionaries transform concepts into living, breathing narratives that captivate audiences.",
        img: IMG01.src,
    }, {
        title: "Whiteboard Animation Video",
        txt: "Whiteboard videos simulate black-line graphics on a white background while guiding viewers through the entire concept or idea.",
        img: IMG01.src,
    },
    {
        title: "Motion Graphics",
        txt: "Again, motion graphics animation videos are known for being simple and engaging. It's the perfect animation style for businesses looking to show off various goods or services.",
        img: IMG01.src,
    }
]

const ServicesLP = () => {


    return (
        <section className={`${styles.servicesLp} servicesSlider`}>
            <Container>
                <Row>
                    <Col lg={12} className='m-auto text-center'>
                        <h2>Master the Art of <span>Video Animation</span></h2>
                        <p>When it comes to any type of video animation services, we are quite well-equipped and well-versed.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='p-0'>
                <Row>
                    <SliderServices slides={SLIDES} options={OPTIONS} />
                </Row>
            </Container>
        </section>
    )
}

export default ServicesLP