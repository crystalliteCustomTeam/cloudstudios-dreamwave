import styles from "./styles/footer.module.scss"
import Image from "next/image"
import { FooterMainLogo, FooterPhone, FooterEmail, FooterWeb, FooterPin } from "@/src/app-constants"
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/lp/explainer-video-animation/payment-img.webp"
import facebook from "media/lp/explainer-video-animation/footer/fb.webp";
import twitter from "media/lp/explainer-video-animation/footer/x.webp";
import youtube from "media/lp/explainer-video-animation/footer/youtube.webp";
import instagram from "media/lp/explainer-video-animation/footer/insta.webp";
import linkedin from "media/lp/explainer-video-animation/footer/linkedin.webp";
import vimeo from "media/lp/explainer-video-animation/footer/vemio.webp";
import tiktok from "media/lp/explainer-video-animation/footer/tiktok.webp";
import Link from "next/link"
import ContactForm from "./contactfrom"

const socialLinks = [
    {
        icon: facebook,
        link: "https://www.facebook.com/infinityanimationsofficial"
    },
    {
        icon: twitter,
        link: "https://twitter.com/infinityan_/"
    },
    {
        icon: instagram,
        link: "https://www.instagram.com/infinityanimationsofficials"
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/company/infinity-animations/"
    },
    {
        icon: youtube,
        link: "https://www.youtube.com/@Infinity-Animations"
    },
    {
        icon: vimeo,
        link: "https://www.vimeo.com/infinityanimations"
    },
    {
        icon: tiktok,
        link: "https://www.tiktok.com/@infinityanimationsusa"
    },
];
const FooterLP = () => {
    return (
        <>
            <section className={styles.footerLP}>
                <Container>
                    <Row>
                        <Col md={6} lg={4} className="m-auto">
                            <div className={styles.footerContent}>
                                <div className={styles.contactLogo}>
                                    <FooterMainLogo />
                                </div>
                                <div className={styles.contactInfo}>
                                    <a href="tel:1-833-666-6684"><FooterPhone />1-833-666-6684</a>
                                </div>
                                <div className={styles.contactInfo}>
                                    <a href="mailto:queries@cloudstudios.us"> <FooterEmail />queries@cloudstudios.us</a>
                                </div>
                                <div className={styles.contactInfo}>
                                    <a href="https://cloudstudios.us/"> <FooterWeb />www.cloudstudios.us</a>
                                </div>
                                <div className={styles.contactAddress}>
                                    <div>
                                        <FooterPin />
                                    </div>
                                    <div>
                                        3415 S Sepulveda Blvd, Culver City, CA 90034, United States
                                    </div>
                                </div>
                                <div className={styles.paymentImg}>
                                    <Image src={IMG.src} alt="Payment Method" width={402} height={86} />
                                </div>


                                <ul className={styles.socailIcon}>
                                    {
                                        socialLinks.map((e, i) => {
                                            return (
                                                <li key={i}>
                                                    <a target="_blank" href={e.link}>
                                                        <Image src={e.icon} alt="Infinity Animation" width={43} height={43} />
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>

                            </div>
                        </Col>
                        <Col md={6} lg={6} className="offset-md-0 offset-lg-2 my-auto">
                            <div className={styles.footerFrom}>
                                <h3>Get A Free Consultation with An Experienced Animation Expert</h3>
                                <p>Book a meeting with a member of our team to learn more and get a quote today!</p>
                                <ContactForm />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            <section className={styles.copyrightLP}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={6} className="my-auto ">
                            <p>© Copyright 2024 - Cloud Studios Inc</p>
                        </Col>
                        <Col md={6} className="my-auto">
                            <ul>
                                <li><Link href="" >Terms of Services</Link></li>
                                <li><Link href="">Privacy Policy</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FooterLP