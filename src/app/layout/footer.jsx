import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon, FooterMainLogo } from "@/src/app-constants"
import styles from "@/styles/layout/footer.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import FooterImg from "media/footer/footerImg.webp"
import Image from "next/image"

const Footer = () => {
    return (
        <section className={`${styles.footerSec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={3} lg={4} md={4}>
                        <div className={styles.contactLogo}>
                            <FooterMainLogo />
                        </div>
                        <ul className={styles.socailIcon}>
                            <li>
                                <a href="#" target="_blank"><FacebookIcon /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><InstagramIcon /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><LinkedInIcon /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><YoutubeIcon /></a>
                            </li>
                        </ul>
                        <div className={styles.contactNumber}>
                            <a href="tel:0123456789" target="_blank">012 345 6789</a>
                        </div>
                        <div className={styles.contactAddress}>
                            85 Liberty Ship Way, Suite 114 Sausalito, California 94965
                        </div>
                        <Image src={FooterImg.src} alt="footer Img" height={80} width={190} />
                    </Col>
                    <Col xxl={9} lg={8} md={8} className="my-auto">
                        <div className={styles.footerLinks}>
                            <ul>
                                <li><Link href="">Company</Link></li>
                                <li><Link href="">Testimonials</Link></li>
                                <li><Link href="">Reviews</Link></li>
                                <li><Link href="">Contact Us</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="">Services</Link></li>
                                <li><Link href="">Process</Link></li>
                                <li><Link href="">Pricing</Link></li>
                                <li><Link href="">Partnerships</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="">2D Animation</Link></li>
                                <li><Link href="">3D Animation</Link></li>
                                <li><Link href="">Mixed Media</Link></li>
                                <li><Link href="">Live Action</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="">Portfolio</Link></li>
                                <li><Link href="">Blog</Link></li>
                                <li><Link href="">Careers</Link></li>
                                <li><Link href="">Get Quote</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="">Localization</Link></li>
                                <li><Link href="">Lottie Files</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="">Social Cuts</Link></li>
                                <li><Link href="">Video Cards</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Footer