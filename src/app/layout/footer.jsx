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
                                <a href="#" target="_blank" aria-label="Facebook Link"><FacebookIcon /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank" aria-label="Instagram Link"><InstagramIcon /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank" aria-label="Linkedin Link"><LinkedInIcon /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank" aria-label="Youtube Link"><YoutubeIcon /></a>
                            </li>
                        </ul>
                        <div className={styles.contactNumber}>
                            <a href="tel:0123456789" target="_blank" aria-label="Contact Link">012 345 6789</a>
                        </div>
                        <div className={styles.contactAddress}>
                            85 Liberty Ship Way, Suite 114 Sausalito, California 94965
                        </div>
                        <Image src={FooterImg.src} alt="footer Img" height={80} width={190} />
                    </Col>
                    <Col xxl={9} lg={8} md={8} className="my-auto">
                        <div className={styles.footerLinks}>
                            <ul>
                                <li><Link href="" aria-label="Company Link">Company</Link></li>
                                <li><Link href="" aria-label="Testimonials Link">Testimonials</Link></li>
                                <li><Link href="" aria-label="Reviews Link">Reviews</Link></li>
                                <li><Link href="" aria-label="Contact Link">Contact Us</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="" aria-label="Services Link">Services</Link></li>
                                <li><Link href="" aria-label="Process Link" >Process</Link></li>
                                <li><Link href="" aria-label="Pricing Link">Pricing</Link></li>
                                <li><Link href="">Partnerships</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="" aria-label="2D Animation Link">2D Animation</Link></li>
                                <li><Link href="" aria-label="3D Animation Link">3D Animation</Link></li>
                                <li><Link href="" aria-label="Mixed Link" >Mixed Media</Link></li>
                                <li><Link href="" aria-label="Live Link">Live Action</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="" aria-label="Portfolio Link">Portfolio</Link></li>
                                <li><Link href="" aria-label="Blog Link">Blog</Link></li>
                                <li><Link href="" aria-label="Careers Link">Careers</Link></li>
                                <li><Link href="" aria-label="Get Quote Link" >Get Quote</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="" aria-label="Localization Link">Localization</Link></li>
                                <li><Link href="" aria-label="Lottie Link" >Lottie Files</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="" aria-label="Social Link" >Social Cuts</Link></li>
                                <li><Link href="" aria-label="Video Link">Video Cards</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Footer