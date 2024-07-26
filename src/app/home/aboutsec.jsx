import { ArrowMenu, FavIcon } from "@/src/app-constants"
import styles from "@/styles/home/aboutsec.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"



const AboutSec = () => {
    return (
        <section className={`${styles.aboutSec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={5} xl={5} lg={5} md={5} className="my-auto">
                        <div className={styles.whatTitle}>
                            What is Cloud
                            <FavIcon />Studios
                        </div>
                        <div className={styles.whatVideo}>
                            <video width="100%" controls={false} autoPlay={true} loop={true} muted preload="none" >
                                <source src={"videos/LogoAnimation.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={7} className="offset-lg-1">
                        <h3 className="spacing">WhO We ArE</h3>
                        <div className={styles.howTxt}>
                            Our mission is to help our clients uncover the essence of their brand story to drive sales, influence decisions, and promote understanding
                        </div>
                        <p>Cloud Studios creates videos that bring your brand’s vision to life through research, strategy, copywriting, and custom visuals.
                            Our personalized and collaborative approach ensures that your video is truly one of a kind.
                        </p>
                        <p>As an end-to-end service solution, we’ll guide you through every step – from our streamlined discovery process, through key points in production, to final delivery.</p>
                        <Link href="#" className="button">Learn more about our process <ArrowMenu /></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSec