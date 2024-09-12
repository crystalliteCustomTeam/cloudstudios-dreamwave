"use client"
import { ArrowMenu, PlayBtn } from "@/src/app-constants"
import styles from "@/styles/home/casestudy.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import IMG1 from "media/home/casestudies/thumb-1.jpg"
import IMG2 from "media/home/casestudies/thumb-2.jpg"
import IMG3 from "media/home/casestudies/thumb-3.jpg"
import IMG4 from "media/home/casestudies/thumb-4.jpg"
import { useState } from "react"
import VideoModal from "@/src/components/videomodal"


const CaseStudy = () => {
    const [modalShow, setModalShow] = useState(false);
    const [videoUrl, setvideoUrl] = useState("");

    const handlePlayClick = (videoUrl) => {
        setModalShow(true);
        setvideoUrl(videoUrl);

    };

    return (
        <>
            <section className={`${styles.casestudySec} p-100`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col xxl={7} lg={7} md={6}>
                            <h3 className="spacing">Our Power Projects!</h3>
                            <h2>
                                We deliver animation that pushes brands through the noise.
                            </h2>
                        </Col>
                        <Col xxl={5} lg={5} md={6} className="ms-auto my-auto">
                            <Link href="/portfolio" className="button">All Case Studies <ArrowMenu /></Link>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col xxl={4} lg={4} md={6}>
                            <div
                                className={`${styles.videoBox} ${videoUrl !== "" ? styles.active : ''}`}
                                style={{ backgroundImage: `url(${IMG1.src})` }}
                            >
                                <div className={styles.playBtn} onClick={() => handlePlayClick('1004284175')}>
                                    <PlayBtn />
                                </div>
                                <div className={styles.videoTxt}>
                                    <h4>Quantum Leap</h4>
                                    <p>Challenge: Explain quantum computing to a broad audience. Solution: Created an immersive, interactive 3D animation series. Result: 500% increase in website engagement and 50% boost in investor interest.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={8} lg={8} md={6}>
                            <div className={styles.videoBox} style={{ backgroundImage: `url(${IMG2.src})` }}>
                                <div className={styles.playBtn} onClick={() => handlePlayClick('1004282334')}>
                                    <PlayBtn />
                                </div>
                                <div className={styles.videoTxt}>
                                    <h4>Eco Revolution</h4>
                                    <p>Challenge: Showcase the benefits of electric vehicles innovatively. Solution: Developed a VR animation experience in a zero-emission city. The result was a 200% increase in test drives and 75% growth in social media following.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={4} lg={4} md={6}>
                            <div className={`${styles.videoBox} ${styles.last}`} style={{ backgroundImage: `url(${IMG3.src})` }}>
                                <div className={styles.playBtn} onClick={() => handlePlayClick('1004282947')}>
                                    <PlayBtn />
                                </div>
                                <div className={styles.videoTxt}>
                                    <h4>Financial Futures</h4>
                                    <p>Challenge: Make complex financial products accessible to millennials. Solution: Produced a series of quirky, informative, animated explainer videos. Result: 300% increase in app downloads and 150% boost in user retention.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={8} lg={8} md={6}>
                            <div className={`${styles.videoBox} ${styles.last}`} style={{ backgroundImage: `url(${IMG4.src})` }}>
                                <div className={styles.playBtn} onClick={() => handlePlayClick('1004283621')}>
                                    <PlayBtn />
                                </div>
                                <div className={styles.videoTxt}>
                                    <h4>Healthtech Transformation for VitalinoLink Italy</h4>
                                    <p>Challenge: Demonstrate the impact of AI in healthcare. Solution: Created a mixed reality animation for a trade show presentation. Result: Secured five significant partnerships and increased market share by 25%.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <VideoModal show={modalShow} iframeUrl={videoUrl}
                onHide={() => setModalShow(false)} />

        </>
    )
}

export default CaseStudy
