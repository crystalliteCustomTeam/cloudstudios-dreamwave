import TestimonialSlider from "@/src/components/testimonialslider"
import styles from "@/styles/home/testimonial.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerBg from "media/home/testimonial/logo.webp"


const OPTIONS = { align: 'start', loop: true }


const Testimonial = ({ clients, slides, tit }) => {
    return (
        <section className={`${styles.testimonialSec} p-100`} style={{ backgroundImage: `url(${BannerBg.src})` }}>
            <Container>
                <Row>
                    <Col xxl={7} xl={7} lg={6} md={8} className="m-auto text-center">
                        <h3 className="spacing">TESTIMONIALS </h3>
                        <h2>{tit ? tit : "Find Out Why Everyone’s Talking About Our Amazing Work!"}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12}>
                        <TestimonialSlider slides={slides} options={OPTIONS} clients={clients} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial