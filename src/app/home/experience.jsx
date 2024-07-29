import styles from "@/styles/home/experience.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/home/experience/ExperienceImg.webp"
import IMG1 from "media/home/experience/HubSpot.webp"
import IMG2 from "media/home/experience/JPMorgan.webp"
import IMG3 from "media/home/experience/McKesson.webp"
import IMG4 from "media/home/experience/Peacock.webp"
import IMG5 from "media/home/experience/Universal.webp"
import IMG6 from "media/home/experience/Safeway.webp"
import IMG7 from "media/home/experience/TMobile.webp"
import IMG8 from "media/home/experience/Visa.webp"
import IMG9 from "media/home/experience/Alibaba.webp"
import IMG10 from "media/home/experience/Google.webp"
import IMG11 from "media/home/experience/Amazon.webp"
import IMG12 from "media/home/experience/Clear.webp"
import IMG13 from "media/home/experience/Uber.webp"
import IMG14 from "media/home/experience/Toast.webp"
import Image from "next/image"
import Link from "next/link"
import { ArrowMenu } from "@/src/app-constants"

const images = [
    IMG1.src,
    IMG2.src,
    IMG3.src,
    IMG4.src,
    IMG5.src,
    IMG6.src,
    IMG7.src,
    IMG8.src,
    IMG9.src,
    IMG10.src,
    IMG11.src,
    IMG12.src,
    IMG13.src,
    IMG14.src,
];


const ExperienceSec = () => {
    return (
        <section className={`${styles.experienceSec} p-100`}>
            <Container>
                <Row>
                    <Col xxl={12}>
                        <div className={styles.experienceBg}>
                            <div className={styles.experienceTxt}>
                                <h3 className="spacing">OUR EXPERIENCE</h3>
                                <div className={styles.howTxt}>
                                    At Cloud Studios, we’re equipped to handle video production for businesses of all shapes and sizes - from agile startups to industry giants like Uber, Amazon, HubSpot, and Google.
                                </div>
                                <p>Our nimble teams leverage the latest cloud-based tools and workflows to deliver top-notch animation video content tailored to your specific needs. Whether you require lifestyle videos, product demos, or complex corporate narratives, we have the technical chops and creative flair to bring your vision to life..</p>
                                <div className={styles.experienceLogos}>
                                    {images.map((src, index) => (
                                        <div className={styles.logosItem} key={index} >
                                            <Image src={src} alt="cloud Studios" height={55} width={110} />
                                        </div>
                                    ))}
                                </div>
                                <Link href="#" className="button">Get Started <ArrowMenu /></Link>
                            </div>
                            <div className={styles.experienceImg}>
                                <Image src={IMG.src} alt="Experience" width={668} height={712} />
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExperienceSec