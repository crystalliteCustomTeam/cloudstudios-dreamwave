import { BuletIcon, PhoneICon } from "@/src/app-constants"
import styles from "./styles/pricing.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image"
import IMG01 from "media/lp/explainer-video-animation/pricing/packagesImage1.png"
import IMG02 from "media/lp/explainer-video-animation/pricing/packagesImage2.png"
import IMG03 from "media/lp/explainer-video-animation/pricing/packagesImage3.png"
import BG01 from "media/lp/explainer-video-animation/pricing/package-1.png"
import BG02 from "media/lp/explainer-video-animation/pricing/package-2.png"
import BG03 from "media/lp/explainer-video-animation/pricing/package-3.png"
import CommonBtnLP from "./common/commonbtnlp"

const PricingLP = () => {
    return (
        <section className={styles.priceLp}>
            <Container>
                <Row>
                    <Col lg={8} className='m-auto text-center'>
                        <h3 className="spacing">Pricing</h3>
                        <h2>A Comprehensive Suite of <span>Video Animation</span> Packages</h2>
                        <p>Infinity Animations is a renowned name in the video animation industry. Our packages cover all the pre-production and post-production steps so that you walk away with an animated video that delivers results.</p>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.pricebox}>
                            <div className={styles.priceItem} >
                                <div className={styles.colorBox} >
                                    <div className={styles.Img}>
                                        <Image src={BG01.src} alt="Startup Package" width={580} height={199} />
                                    </div>
                                    <div className={styles.iconImg}>
                                        <Image src={IMG01.src} alt="Startup Package" width={120} height={120} />
                                    </div>
                                </div>
                                <div className={styles.priceTitle}>
                                    Startup Package
                                    <div className={styles.price}>$195</div>
                                </div>
                                <div className={styles.priceContect}>
                                    <ul className={styles.priceList}>
                                        <li><BuletIcon />30 Seconds Duration</li>
                                        <li><BuletIcon />Script Writing</li>
                                        <li><BuletIcon />Custom Artwork</li>
                                        <li><BuletIcon />Background Music</li>
                                        <li><BuletIcon />HD Format Video</li>
                                        <li><BuletIcon />Dedicated Support</li>
                                    </ul>
                                </div>
                                <div className={styles.ctaBtn}>
                                    <CommonBtnLP data="Get A Call For Free Consultation" color="red" />
                                    <div className={styles.contactItem}>
                                        <div>
                                            <a href="tel:1-833-666-6689"><PhoneICon />1-833-666-6689</a>
                                        </div>
                                        <div>
                                            <div>Live Chat Now</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.priceItem} >
                                <div className={styles.colorBox} >
                                    <div className={styles.Img}>
                                        <Image src={BG02.src} alt="Startup Package" width={580} height={199} />
                                    </div>
                                    <div className={styles.iconImg}>
                                        <Image src={IMG02.src} alt="Startup Package" width={120} height={120} />
                                    </div>
                                </div>
                                <div className={styles.priceTitle}>
                                    Classic Package
                                    <div className={styles.price}>$499</div>
                                </div>
                                <div className={styles.priceContect}>
                                    <ul className={styles.priceList}>
                                        <li><BuletIcon />30 Seconds Duration</li>
                                        <li><BuletIcon />Script Writing</li>
                                        <li><BuletIcon />Professional Voice-over & SFX</li>
                                        <li><BuletIcon />Hand-drawn Illustrations</li>
                                        <li><BuletIcon />HD Format Video</li>
                                        <li><BuletIcon />Dedicated Support</li>
                                    </ul>
                                </div>
                                <div className={styles.ctaBtn}>
                                    <CommonBtnLP data="Get A Call For Free Consultation" />
                                    <div className={styles.contactItem}>
                                        <div>
                                            <a href="tel:1-833-666-6689"><PhoneICon />1-833-666-6689</a>
                                        </div>
                                        <div>
                                            <div>Live Chat Now</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.priceItem} >
                                <div className={styles.colorBox} >
                                    <div className={styles.Img}>
                                        <Image src={BG03.src} alt="Startup Package" width={580} height={199} />
                                    </div>
                                    <div className={styles.iconImg}>
                                        <Image src={IMG03.src} alt="Startup Package" width={120} height={120} />
                                    </div>
                                </div>
                                <div className={styles.priceTitle}>
                                    Premium Package
                                    <div className={styles.price}>$799</div>
                                </div>
                                <div className={styles.priceContect}>
                                    <ul className={styles.priceList}>
                                        <li><BuletIcon />30 Seconds Duration</li>
                                        <li><BuletIcon />Script Writing</li>
                                        <li><BuletIcon />Professional Voice-over & SFX</li>
                                        <li><BuletIcon />Hand-drawn Illustrations</li>
                                        <li><BuletIcon />HD Format Video</li>
                                        <li><BuletIcon />Dedicated Support</li>
                                    </ul>
                                </div>
                                <div className={styles.ctaBtn}>
                                    <CommonBtnLP data="Get A Call For Free Consultation" />
                                    <div className={styles.contactItem}>
                                        <div>
                                            <a href="tel:1-833-666-6689"><PhoneICon />1-833-666-6689</a>
                                        </div>
                                        <div>
                                            <div>Live Chat Now</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PricingLP