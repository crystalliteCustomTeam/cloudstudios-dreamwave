import TestimonialSlider from "@/src/components/testimonialslider"
import styles from "@/styles/layout/header.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import IMG01 from "media/home/testimonial/4.png"
import IMG02 from "media/home/testimonial/5.png"
import IMG03 from "media/home/testimonial/6.png"
import IMG04 from "media/home/testimonial/1.png"
import IMG05 from "media/home/testimonial/2.png"
import IMG06 from "media/home/testimonial/3.png"

const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        name: " Jane Doe",
        txt: "2D Animatior",
        img: IMG01.src,
    },
    {
        name: "Jane Doe",
        txt: "2D Animatior",
        img: IMG02.src,
    },
    {
        name: "Jane Doe",
        txt: "CEO",
        img: IMG03.src,
    }, {
        name: " Jane Doe",
        txt: "CMO",
        img: IMG04.src,

    }, {
        name: "Jane Doe",
        txt: "Director",
        img: IMG05.src,

    }, {
        name: " Jane Doe",
        txt: "Animatior",
        img: IMG06.src,
    }
]
const TeamSec = () => {
    return (
        <section className={`${styles.teamSec} p-100`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <h3 className="spacing">OUR TEAM</h3>
                        <h2>We Believe in Talented Businesses</h2>
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

export default TeamSec