import { FacebookIcon, InstagramIcon, Tiktok, LinkedInIcon, YoutubeIcon, FooterMainLogo, VimeoIcon } from "@/src/app-constants"
import styles from "@/styles/layout/footer.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import FooterImg from "media/footer/footerImg.webp"
import Image from "next/image"

const Footer = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
        <section className={`${styles.footerSec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={3} lg={4} md={4}>
                        <div className={styles.contactLogo}>
                            <FooterMainLogo />
                        </div>
                        <ul className={styles.socailIcon}>
                            <li>
                                <a href="https://www.facebook.com/cloudstudiosus" target="_blank" aria-label="Facebook Link"><FacebookIcon /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/cloudstudiosincofficial/" target="_blank" aria-label="Instagram Link"><InstagramIcon /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/cloud-studio-inc/" target="_blank" aria-label="Linkedin Link"><LinkedInIcon /></a>
                            </li>
                            <li>
                                <a href="https://vimeo.com/cloudstudiosinc" target="_blank" aria-label="Vimeo Link"><VimeoIcon /></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@cloudstudiosus" target="_blank" aria-label="Youtube Link"><YoutubeIcon /></a>
                            </li>
                        </ul>
                        <div className={styles.contactNumber}>
                            <a href="tel:833-666-6684" target="_blank" aria-label="Contact Link">833-666-6684</a>
                        </div>
                        <div className={styles.contactNumber}>
                            <a href="https://maps.app.goo.gl/u3V78iyGy3R2pCcJA" target="_blank" aria-label="Pin Link">3415 S Sepulveda Blvd, Culver City, CA 90034, United States</a>
                        </div>
                        <div className={styles.contactNumber}>
                            <a href="https://maps.app.goo.gl/Mw13yLeB1LVFMnPa6" target="_blank" aria-label="Pin Link">418 BROADWAY STE R ALBANY NY 12207</a>
                        </div>
                        <Image src={FooterImg.src} alt="footer Img" height={80} width={190} />
                    </Col>

                    <Col xxl={9} lg={8} md={8} className="my-auto">
                        <div className={styles.footerLinks}>
                            <ul>
                                <li><Link href="/portfolio" aria-label="Portfolio Link">Portfolio</Link></li>
                                <li><Link href="/animation-video-pricing" aria-label="Pricing Link">Pricing</Link></li>
                                <li><Link href="/contact" aria-label="Contact Link">Contact us</Link></li>
                                <li><Link href="/privacy-policy" aria-label="Contact Link">Privacy Policy</Link></li>
                                <li><Link href="/terms-and-conditions" aria-label="Contact Link">Terms and Conditions</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="/services/2d-animations" aria-label="2D Animations Link">2D Animations</Link></li>
                                <li><Link href="/services/3d-animations" aria-label="3D Animations Link">3D Animations</Link></li>
                                <li><Link href="/services/explainer-videos" aria-label="Explainer Videos Link" >Explainer Videos </Link></li>
                                <li><Link href="/services/infographics-videos" aria-label="Infographics Design Link">Infographics Videos</Link></li>
                            </ul>
                            <ul>
                                <li><Link href="/services/logo-animation" aria-label="Logo Animation Link">Logo Animation</Link></li>
                                <li><Link href="/services/video-editing" aria-label="Video Editing Link" >Video Editing</Link></li>
                                <li><Link href="/services/cgi-vfx" aria-label="CGI & VFX Link">CGI & VFX</Link></li>
                                <li><Link href="/services/motion-graphics" aria-label="Motion-Graphics Link">Motion Graphics</Link></li>

                            </ul>
                            <ul>
                                <li><Link href="/services/whiteboard-animation" aria-label="Whiteboard Animation Link" >Whiteboard Animation</Link></li>
                                <li><Link href="/services/hybrid-and-cel-animation" aria-label="Hybrid and Cel Animation Link" >Hybrid and Cel Animation</Link></li>
                                <li><Link href="/services/promotional-videos" aria-label="Promotional Videos Link">Promotional Videos</Link></li>
                                <li><Link href="/services/architectural-visualization" aria-label="Architectural Visualization Link">Architectural Visualization</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            <section className={styles.__bottomBar}>
                <Container>
                <Row>
                    <Col xs="12">
                    <div className="text-center">
                        <span>Copyright © 2025 Cloud Studios. </span>
                    </div>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    )
}
export default Footer