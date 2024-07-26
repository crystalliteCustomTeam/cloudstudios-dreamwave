import TestimonialSlider from "@/src/components/testimonialslider"
import styles from "@/styles/home/testimonial.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerBg from "media/home/testimonial/logo.webp"
import IMG01 from "media/home/testimonial/1.png"
import IMG02 from "media/home/testimonial/2.png"
import IMG03 from "media/home/testimonial/3.png"
import IMG04 from "media/home/testimonial/4.png"
import IMG05 from "media/home/testimonial/5.png"
import IMG06 from "media/home/testimonial/6.png"

const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        name: " Jane Doe",
        txt: "Marketing Director at Tech Innovations",
        img: IMG01.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Jane Doe",
        txt: "Marketing Director at Tech Innovations",
        img: IMG02.src,
        video: "videos/LogoAnimation3.mp4",
    },
    {
        name: "Jane Doe",
        txt: "Marketing Director at Tech Innovations",
        img: IMG03.src,
        video: "videos/LogoAnimation3.mp4",
    }, {
        name: " Jane Doe",
        txt: "Marketing Director at Tech Innovations",
        img: IMG04.src,
        video: "videos/LogoAnimation3.mp4",
    }
    , {
        name: " Jane Doe",
        txt: "Marketing Director at Tech Innovations",
        img: IMG05.src,
        video: "videos/LogoAnimation3.mp4",
    }
    , {
        name: " Jane Doe",
        txt: "Marketing Director at Tech Innovations",
        img: IMG06.src,
        video: "videos/LogoAnimation3.mp4",
    }
]

const Testimonial = () => {
    return (
        <section className={`${styles.testimonialSec} p-100`} style={{ backgroundImage: `url(${BannerBg.src})` }}>
            <Container>
                <Row>
                    <Col xl={7} lg={8} md={6} className="m-auto text-center">
                        <h3 className="spacing">TESTIMONIALS</h3>
                        <h2>Our tried and true process produces successful videos</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12}>
                        <TestimonialSlider slides={SLIDES} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial