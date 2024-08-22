import { ChatIcon } from '@/src/app-constants'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import IMG from "media/lp/explainer-video-animation/salesimage.webp"
import styles from "./styles/ctavideo.module.scss"
import CommonBtnLP from './commonbtnLP'

const CtavideoLP = () => {
    return (
        <section className={styles.ctaVideoLpSec}>
            <Container>
                <Row className={styles.ctaVideoLp} >
                    <Col md={9} lg={7} className='m-auto'>
                        <h2>The Best Video Animation Services Are Just A Click Away!</h2>
                        <ul className={styles.ctaVideoBtnLp}>
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
                    <Col md={3} lg={5} className='mt-auto'>
                        <Image src={IMG.src} alt='Custom Animated Videos' width={640} height={417} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtavideoLP