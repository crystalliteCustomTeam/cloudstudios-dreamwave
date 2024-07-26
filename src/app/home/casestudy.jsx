"use client"
import { ArrowMenu, PlayBtn } from "@/src/app-constants"
import VideoPlayer from "@/src/components/videoplayer"
import styles from "@/styles/home/casestudy.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import IMG1 from "media/home/casestudies/img01.webp"
import IMG2 from "media/home/casestudies/img02.webp"
import IMG3 from "media/home/casestudies/img03.webp"
import { useState } from "react"


const CaseStudy = () => {
    const [videoUrl, setVideoUrl] = useState('');

    const handlePlayClick = (url) => {
        if (videoUrl === url) {
            setVideoUrl(''); // Stop the video if it is already playing
        } else {
            setVideoUrl(url); // Play the clicked video
        }
    };

    return (
        <section className={`${styles.casestudySec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={6} lg={6} md={7}>
                        <h3 className="spacing">OUR BEST WORK</h3>
                        <h2>
                            Crafting Visual Stories
                            That Captivate and Inspire
                        </h2>
                    </Col>
                    <Col xxl={6} lg={6} md={5} className="ms-auto my-auto">
                        <Link href="#" className="button">All Case Studies <ArrowMenu /></Link>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col xxl={8} lg={8} md={8}>
                        <div
                            className={`${styles.videoBox} ${videoUrl === 'videos/LogoAnimation.mp4' ? styles.active : ''}`}
                            style={{ backgroundImage: `url(${IMG1.src})` }}
                        >
                            {videoUrl === 'videos/LogoAnimation.mp4' && <VideoPlayer video={videoUrl} />}
                            <div className={styles.playBtn} onClick={() => handlePlayClick('videos/LogoAnimation.mp4')}>
                                <PlayBtn />
                            </div>
                            <div className={styles.videoTxt}>
                                <h4>Royal Match</h4>
                                <p>Embark on a majestic journey through the enchanting world of Royal Match, where puzzle-solving meets regal adventure! In this captivating animation trailer.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={4} lg={4} md={4}>
                        <div className={styles.videoBox} style={{ backgroundImage: `url(${IMG2.src})` }}>
                            {videoUrl === 'videos/LogoAnimation2.mp4' && <VideoPlayer video={videoUrl} />}
                            <div className={styles.playBtn} onClick={() => handlePlayClick('videos/LogoAnimation2.mp4')}>
                                <PlayBtn />
                            </div>
                            <div className={styles.videoTxt}>
                                <h4>Jumbo Junior</h4>
                                <p>Embark on a majestic journey through the enchanting world of Royal Match, where puzzle-solving meets regal adventure! In this captivating animation trailer.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={12} lg={12} md={12}>
                        <div className={`${styles.videoBox} ${styles.last}`} style={{ backgroundImage: `url(${IMG3.src})` }}>
                            {videoUrl === 'videos/LogoAnimation3.mp4' && <VideoPlayer video={videoUrl} />}
                            <div className={styles.playBtn} onClick={() => handlePlayClick('videos/LogoAnimation3.mp4')}>
                                <PlayBtn />
                            </div>
                            <div className={styles.videoTxt}>
                                <h4>Scarred - Cel</h4>
                                <p>Creativity knows no bounds at Infinity Animations, where we specialize in delivering exclusive Infinity Animations services to our customers. Our team of skilled animators and storytellers work tirelessly to bring ideas to life. With an eye for detail and a passion for innovation, we strive to exceed expectations and deliver animations that resonate with viewers on an emotional level.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudy
