
"use client"
import styles from "./styles/mainbanner.module.scss";
import { Col, Container, Row } from "react-bootstrap"
import BannerImg from "media/portfolio/bannerImg.webp"
import Image from "next/image"
import { BuletIcon, Stars } from "@/src/app-constants"
import CommonBtn from "@/src/components/commonbtn"
import VideoPlayer from "@/src/components/videoplayer"
import ContactForm from "./contactfrom"




const MainBanner = () => {
    const video = "https://player.vimeo.com/video/1001680637?h=44a469d25a&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0"
    return (
        <>
            <section className={styles.mainBanner}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col xxl={6} xl={6} lg={6} md={6} className="m-auto">
                            <div className={styles.bannerContentBox}>

                                {/* <div className={styles.bannerRating}>
                                    <Stars />
                                    The New Frontier in Animation.
                                </div> */}

                                <h1>Share Your Exciting Story with Animated Explainer Videos . Best Explainer
                                    Video Production Company</h1>
                                <ul>
                                    <li><BuletIcon />Demo & Tutorial Videos</li>
                                    <li><BuletIcon />Animated Training Videos</li>
                                    <li><BuletIcon />Marketing Explainer Videos</li>
                                    <li><BuletIcon />Promotional Videos</li>
                                    <li><BuletIcon />Product Explainer Videos</li>
                                    <li><BuletIcon />Animated Commercial Videos</li>
                                </ul>
                                <div className={styles.bannerImg}>
                                    <Image src={BannerImg.src} alt="Cloud Studios" height={58} width={499} priority />
                                </div>
                                <CommonBtn data="Get Started" />
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} className="m-auto">
                            <div className={styles.BannerFrom}>
                                <div className={styles.title}>
                                    <h3>Share Your Animation Idea</h3>
                                    <p>sign-up & get upto <span>70% off</span> on all types of video services</p>
                                </div>

                                <div className={styles.contactFromlp}>
                                    <ContactForm />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <VideoPlayer iframeUrl={video} />
            </section>

        </>
    )
}

export default MainBanner