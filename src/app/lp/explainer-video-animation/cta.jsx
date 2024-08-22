import { ChatIcon } from '@/src/app-constants'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import IMG from "media/lp/explainer-video-animation/brandshine.webp"
import styles from "./styles/cta.module.scss"
import CommonBtnLP from './commonbtnLP'

const CtaLP = () => {
    return (
        <section className={styles.ctaLpSec}>
            <Container>
                <Row className={styles.ctaLp}>
                    <Col lg={8} md={9} className='m-auto'>
                        <h4>Broad-Cast Your Brand Worldwide Through Custom Animated Videos!</h4>
                        <p>We assure you that we will make use of every latest and related method
                            to develop and improve your corporate identity in the market with our best video service.</p>
                        <ul className={styles.ctaBtnLp}>
                            <li>
                                <CommonBtnLP data="Make an Animation" />
                            </li>
                            <li>
                                <div className='buttonLP'><ChatIcon /> Live Chat</div>
                            </li>
                            <li>
                                <a href="tel:1-833-666-6689" className='buttonLP'>Call Now : 1-833-666-6689</a>
                            </li>
                        </ul>

                    </Col>
                    <Col lg={4} md={3} className='m-auto'>
                        <Image src={IMG.src} alt='Custom Animated Videos' width={1738} height={1800} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaLP