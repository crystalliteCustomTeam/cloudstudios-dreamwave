import TestimonialSlider from "@/src/components/testimonialslider"
import styles from "@/styles/home/testimonial.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerBg from "media/home/testimonial/logo.webp"


const OPTIONS = { align: 'start', loop: true }


const Testimonial = ({ clients, slides }) => {
    return (
        <section className={`${styles.testimonialSec} p-100`} style={{ backgroundImage: `url(${BannerBg.src})` }}>
            <Container>
                <Row>
                    <Col xl={8} lg={20} className="m-auto text-center">
                        <h3 className="spacing">TESTIMONIALS </h3>
                        <h2>See What They Are Saying About All the Cool Stuff We Do!</h2>
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