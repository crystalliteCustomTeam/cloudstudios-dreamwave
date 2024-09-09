
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./styles/banner.module.scss"
import BannerImg from "media/lp/explainer-video-animation/bannerImg.webp"
import Image from 'next/image'
import { BuletIcon, ChatIconNew } from '@/src/app-constants'
import ContactForm from './contactfrom'



const Banner = () => {
    return (
        <section className={styles.bannerLp}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} className="my-auto">
                        <div className={styles.ContentBox}>
                            <h1>Share Your Exciting Story with Animated Explainer Videos . <span>Best Explainer Video Production Company</span></h1>
                            <p>Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & Elevate your Brand.</p>
                            <ul>
                                <li><BuletIcon />2D explainer videos</li>
                                <li><BuletIcon />Explainer videos</li>
                                <li><BuletIcon />Whiteboard explainer videos</li>
                                <li><BuletIcon />Custom explainer video production service</li>
                                <li><BuletIcon />Animated explainer video services</li>
                                <li><BuletIcon />2D/3D animated explainer video production company</li>
                            </ul>
                            <div className={styles.flexBtn}>
                                <a href='tel:1-833-666-6689' className="buttonLP">
                                    Call Now
                                </a>
                                <div className={styles.bannerChatBtn}>
                                    <div>
                                        <ChatIconNew />
                                    </div>
                                    <div>Chat Now to Avail 70% OFF <span>Live Chat</span></div>
                                </div>
                            </div>
                            <Image src={BannerImg} alt="Animated Explainer Videos" width={560} height={60} />
                        </div>
                    </Col>
                    <Col md={5} className="m-auto">
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
            <video width="100%" controls={false} autoPlay loop muted preload="none">
                <source src={'/videos/LogoAnimation.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Banner