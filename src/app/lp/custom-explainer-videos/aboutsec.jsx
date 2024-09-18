import { FavIcon } from "@/src/app-constants"
import CommonBtn from "@/src/components/commonbtn"
import styles from "@/styles/home/aboutsec.module.scss"
import { Col, Container, Row } from "react-bootstrap"



const AboutSec = () => {
    return (
        <section className={`${styles.aboutSec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={5} xl={5} lg={5} md={5} className="my-auto">
                        <div className={styles.whatTitle}>
                            What is Cloud
                            <FavIcon />Studios?
                        </div>
                        <div className={styles.whatVideo}>
                            <video width="100%" controls={false} autoPlay={true} loop={true} muted preload="none" >
                                <source src={"videos/LogoAnimation.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={7} className="offset-lg-1">
                        <h3 className="spacing">Who are we?</h3>
                        <div className={styles.howTxt}>
                            At Cloud Studios, we’re the leading edge of visual narrative, seamlessly melding state-of-the-art technology with creative solutions
                        </div>
                        <p>Our armory includes a 500+ node 4K render farm, an adaptive pipeline combining the best practices and proprietary software, and AI-enhanced procedural animation systems. From cel animation to real-time rendering, our video animation company comprises leading and nominated VFX supervisors, animation experts, and classically trained artists who redefine boundaries in animation and visual effects.</p>
                        <p>We produce stunning visual experiences that enrapture and provoke your brand’s core identity while boosting your engagement levels with your audiences.</p>
                        <CommonBtn data="Learn more about our process" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSec