import CommonBtn from "@/src/components/commonbtn"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/lp/custom-explainer-videos/contentsection.module.scss"
import IMG from "media/lp/custom-explainer-videos/story-img-1.gif"
import Image from "next/image"

const ContentSection = () => {
    return (
        <section className={styles.contentSection} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <h2>A Storytelling <span>2D & 3D Explainer</span> Video Company</h2>
                        <p>With our explainer video production, you can convey your message in a compelling way that convinces the audience to convert into a customer. The custom videos we create don’t just attract, but they also retain attention. Moreover, our custom explainer video experts are always on the lookout to go to a greater extent and do something unique.</p>
                        <p>Explainer Videos LLC hires expert explainer video animators with great expertise in gaining customers’ confidence and satisfying the clients to the utmost satisfaction. Our explainer video animation team’s intellect serves you with the best-animated video production services to bring great designs revival that matter and animation that adds life to the story.</p>
                        <CommonBtn data="Start Your Project" />
                    </Col>
                    <Col md={6} className="m-auto text-center">
                        <Image src={IMG.src} alt="Storytelling" width={555} height={416} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSection