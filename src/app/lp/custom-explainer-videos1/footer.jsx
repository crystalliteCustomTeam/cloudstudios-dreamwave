import CommonBtn from '@/src/components/commonbtn'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IconEmail from "media/lp/custom-explainer-videos/footer-icon-1.png"
import IconPhone from "media/lp/custom-explainer-videos/footer-icon-2.png"
import Image from 'next/image'
import styles from "@/styles/lp/custom-explainer-videos/footer.module.scss"
import ContactForm from '../custom-explainer-videos/contactfrom'


const FooterLP = () => {
    return (
        <>
            <section className={styles.footerLP} >
                <Container>
                    <Row>
                        <Col md={6} className="my-auto">
                            <div className={styles.footerFroms}>
                                <h4>Let’s Talk About Your Project</h4>
                                <ContactForm />
                            </div>
                        </Col>
                        <Col md={6} className="my-auto">
                            <h2>Looking for an excellent Business idea?</h2>
                            <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                            <CommonBtn data="Start Your Project" />

                            <div className={styles.infoContact}>
                                <div className={styles.imgInfo}>
                                    <Image src={IconEmail.src} alt="Email Address" width={22} height={25} />
                                </div>
                                <div className={styles.imgTxt}>
                                    Email Address
                                    <a href='mailto:queries@explainervideosllc.com' target='_blank'>queries@explainervideosllc.com</a>
                                </div>
                            </div>
                            <div className={styles.infoContact}>
                                <div className={styles.imgInfo}>
                                    <Image src={IconPhone.src} alt="Email Address" width={22} height={25} />
                                </div>
                                <div className={styles.imgTxt}>
                                    Call Now
                                    <a href='tel:1-833-666-6684' >1-833-666-6684</a>
                                </div>
                            </div>
                            <div className={styles.copyRight}>
                                <p>© Copyright 2025 - Cloud Studios Inc</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FooterLP