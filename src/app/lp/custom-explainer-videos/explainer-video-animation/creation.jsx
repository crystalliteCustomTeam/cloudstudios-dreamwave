import { Col, Container, Row } from 'react-bootstrap'
import styles from "./styles/creation.module.scss"
import { ChatIcon } from '@/src/app-constants'
import Image from 'next/image'
import IMG from "media/lp/explainer-video-animation/creation.webp"
import CommonBtnLP from './common/commonbtnlp'


const CreationLP = () => {
    return (
        <section className={styles.creationLp}>
            <Container>
                <Row>
                    <Col md={12} className='m-auto text-center'>
                        <h2>Best <span>Explainer Video Animation</span> Creation Services</h2>
                        <p>At Cloud Studios Inc, our team transforms creativity into compelling visuals, crafting pivotal explainer videos for business success. Our seamless process keeps you informed and satisfied throughout.</p>
                    </Col>
                    <Col md={6} className='m-auto'>
                        <h3><span>Explain Better.</span> Drive Engagement. Get More Sales.</h3>
                        <p><strong>Don’t settle for ordinary—capture your audience’s attention with the irresistible allure of animated videos.</strong></p>
                        <p>Our explainer videos simplify complex ideas and engage viewers like never before. Studies show that explainer videos can boost sales by up to 49%, so investing in our animations is a game-changer for your ROI. At Cloud Studios Inc, we deliver innovative, high-quality videos on tight deadlines and at competitive prices. Join top industry leaders who have already reaped the rewards of our exceptional service. Elevate your business with the power of explainer videos today!</p>
                        <ul className={styles.creationBtn}>
                            <li>
                                <CommonBtnLP data="Make an Animation" />
                            </li>
                            <li>
                                <div className='buttonLP'><ChatIcon /> Live Chat</div>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className='m-auto'>
                        <div className={styles.creationVideo}>
                            <video width="100%" controls={false} autoPlay={true} loop={true} muted preload="none" >
                                <source src={"/videos/LogoAnimation.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                    <Col md={12} className='m-auto text-center'>
                        <Image src={IMG.src} alt='Explainer Video Animation' width={3840} height={125} className={styles.imgCreation} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CreationLP