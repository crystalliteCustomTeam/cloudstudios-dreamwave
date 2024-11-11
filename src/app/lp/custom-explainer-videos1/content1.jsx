import CommonBtn from "@/src/components/commonbtn"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/lp/custom-explainer-videos/contentsection.module.scss"
import IMG from "media/lp/custom-explainer-videos/story-img-2.gif"


const ContentSection1 = () => {
    return (
        <section className={styles.contentSection} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="m-auto text-center order-2 order-md-1">
                        <Image src={IMG.src} alt="Storytelling" width={555} height={416} />
                    </Col>
                    <Col md={6} className="my-auto order-1 order-md-2">
                        <h2>Delight Your Audience With Our <span>Custom Explainer</span> Video Services</h2>
                        <p>With our explainer video production, you can convey your message in a compelling way that convinces the audience to convert into a customer. The custom videos we create don’t just attract, but they also retain attention. Moreover, our custom explainer video experts are always on the lookout to go to a greater extent and do something unique.</p>
                        <p>Explainer Videos LLC hires expert explainer video animators with great expertise in gaining customers’ confidence and satisfying the clients to the utmost satisfaction. Our explainer video animation team’s intellect serves you with the best-animated video production services to bring great designs revival that matter and animation that adds life to the story.</p>
                        <CommonBtn data="Start Your Project" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSection1