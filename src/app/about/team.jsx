import TestimonialSlider from "@/src/components/testimonialslider"
import styles from "@/styles/layout/header.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import IMG01 from "media/home/testimonial/test4.webp"
import IMG02 from "media/home/testimonial/test5.webp"
import IMG03 from "media/home/testimonial/test6.webp"

const OPTIONS = { align: 'start', loop: true }

const TeamSec = ({ slides }) => {
    return (
        <section className={`${styles.teamSec} p-100`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <h3 className="spacing">Our Geniuses</h3>
                        <h2>Talented Animators, Powerful Narratives.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12}>
                        <TestimonialSlider slides={slides} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TeamSec