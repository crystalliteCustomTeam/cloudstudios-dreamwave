import { Col, Container, Row } from "react-bootstrap"
import ContactForm from "../custom-explainer-videos/contactfrom"
import styles from "@/styles/lp/custom-explainer-videos/banner.module.scss"
import CommonBtn from "@/src/components/commonbtn"

const Banner = () => {
    return (
        <section className={styles.bannerLP} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} sm={6} xs={12} className="my-auto">
                        <div className={styles.mainLogo}>
                            <h1>Share Your <span>Exciting
                                Story</span> with Animated
                                Explainer Videos</h1>
                            <ul>
                                <li>Self-explanatory Animations</li>
                                <li>High-End Graphics</li>
                                <li>Engaging and interactive features</li>
                                <li>Cost-friendly animation packages</li>
                            </ul>
                            <CommonBtn data="Start Your Project" />
                        </div>
                    </Col>
                    <Col md={6} sm={6} xs={12} className="my-auto">
                        <div className={styles.fromLP}>
                            <h4>Let’s Talk About Your Project</h4>
                            <ContactForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner