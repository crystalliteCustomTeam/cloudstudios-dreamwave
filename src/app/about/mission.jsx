import styles from "@/styles/about/mission.module.scss"
import { Col, Container, Row } from "react-bootstrap"
// import aboutStyles from "@/styles/home/aboutsec.module.scss"

const MissionSec = () => {
    return (
        <section className={`${styles.missionSec} p-100`}>
            <Container>
                <Row>
                    <Col lg={8}>
                        <h3 className="spacing">About Cloud Studios</h3>
                        <h2>Animation is in our descent.</h2>

                        <p>Cloud Studios. dares to be different—or so we like to think. We claim to push the boundaries of innovation, but we do what everyone else does, only 10x better. Our so-called ’industry-leading’ visual storytelling might deserve that title, given how low the bar is set. We crack the codes, we break the walls, and we do fantastic animation beyond the ‘ordinariness.’ </p>
                        <p>Every project is touted as a new frontier, but lets face it. Whether it’s helping a business find its unique identity, constructing another whiteboard animation to explain a product no one understands, or giving a brand its shot at a cinematic moment, we keep the animation machine shaking. We say we’re passionate about animation, but it’s just that we’re good at it. Good! We combine strategic and artistic expertise to achieve reach and engagement for brands and businesses. Traditional and modern elements? Check. Captivating logo animations and immersive architectural visualizations? Of course. Each project is approached with what we like to call dedication and a keen eye for detail, resulting in tangible impacts for B2B clients who are just looking for something that works.</p>

                    </Col>
                    <Col lg={4} >
                        <div className={styles.whatVideo}>
                            <video width="100%" controls={false} autoPlay={true} loop={true} muted preload="none" >
                                <source src={"videos/LogoAnimation.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MissionSec