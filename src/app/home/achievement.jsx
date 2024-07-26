import styles from "@/styles/home/achievement.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import IMG01 from "media/home/achievement/achievementleft.webp"
import IMG02 from "media/home/achievement/achievementright.webp"
import LOGO1 from "media/home/achievement/HubSpot.webp"
import LOGO2 from "media/home/achievement/5-star.webp"
import LOGO3 from "media/home/achievement/Google.webp"
import Link from "next/link"
import { ArrowMenu } from "@/src/app-constants"


const Achievement = () => {
    return (
        <section className={`${styles.achievementSec} p-100`}>
            <Container>
                <Row>
                    <Col xxl={10} xl={10} lg={11} md={12} className="m-auto">
                        <div className={styles.achievementBox}>
                            <div className={styles.achievementImg}>
                                <Image src={IMG01.src} alt="Achievement" height={390} width={86} />
                                <div className={styles.achievementPoints}><span>9X</span> MUSE AWARDS WINNERS</div>
                            </div>
                            <div className={styles.achievementTxt}>
                                <h3 className="spacing">ACHIEVEMENTS</h3>
                                <h2>Multitude of Awards and
                                    Stellar Client Reviews</h2>
                                <p>Showcasing our creative prowess, were proud to be 12-time Davey Award winners, 9-time Muse Award recipients, and 11-time Telly Award victors, affirming our commitment to excellence in video production.</p>
                                <Link href="" className="button">Read Our 5 Star Reviews <ArrowMenu /></Link>
                                <div className={styles.achievementLogos}>
                                    <Image src={LOGO1.src} alt="Achievement" height={60} width={120} />
                                    <Image src={LOGO2.src} alt="Achievement" height={39} width={224} />
                                    <Image src={LOGO3.src} alt="Achievement" height={60} width={120} />
                                </div>
                            </div>
                            <div className={`${styles.achievementImg} ${styles.lastBox}`}>
                                <Image src={IMG02.src} alt="Achievement" height={390} width={127} />
                                <div className={styles.achievementPoints}><span>11X</span>TELLY AWARDS WINNERS</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Achievement