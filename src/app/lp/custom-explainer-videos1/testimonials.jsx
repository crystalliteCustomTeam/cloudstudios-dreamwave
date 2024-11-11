import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/lp/custom-explainer-videos/testimonials.module.scss"
import Partner from "./partner"


const Testimonials = () => {
    return (
        <section className={styles.testimonailSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={5} className="my-auto">
                        <h2>What <span>Our Valuable</span> Clients Say</h2>
                        <p>We have proudly served an awesome client base by delivering comprehensive design solutions. Our clients’ feedback and appreciation will explain it all.</p>
                    </Col>
                    <Col md={6} className="my-auto offset-lg-1">
                        <Partner />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials