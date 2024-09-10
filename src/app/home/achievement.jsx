import styles from "@/styles/home/achievement.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import IMG01 from "media/home/achievement/achievementleft.webp"
import IMG02 from "media/home/achievement/achievementright.webp"
import LOGO1 from "media/home/achievement/HubSpot.webp"
import LOGO2 from "media/home/achievement/5-star.webp"
import LOGO3 from "media/home/achievement/Google.webp"
import { ArrowMenu } from '@/src/app-constants';


const Achievement = ({ data }) => {
    return (
        <section className={`${styles.achievementSec} p-100`}>
            <Container>
                <Row>
                    <Col xxl={10} xl={10} lg={11} md={12} className="m-auto">
                        <div className={styles.achievementBox}>
                            <div className={`${styles.achievementImg} animation`}>
                                <Image src={IMG01.src} alt="Achievement" height={390} width={86} />
                                <div className={styles.achievementPoints}><span>9X</span> MUSE AWARDS WINNERS</div>
                            </div>
                            <div className={styles.achievementTxt}>
                                <h3 className="spacing">ACHIEVEMENTS:</h3>
                                <h2>{data ? data.title : "We Love Recognition. We Love to Boast About Our Awards & Accolades."}</h2>
                                <p>{data ? data.txt : "We have been knocking projects right, front and center, delivering out-of-this-world custom explainer video production solutions. From bagging impressive Muse, Davey & Telly Awards – we continue to provide the new generation of animation solutions to our clients to exceed their wildest expectations!"}</p>
                                {/* <CommonBtn data="Read Our 5 Star Reviews" /> */}
                                <a target="_blank" href="https://www.trustpilot.com/review/cloudstudiosinc.com" className="button">Read Our 4.7 Star Reviews <ArrowMenu /></a>
                                <div className={styles.achievementLogos}>
                                    <Image src={LOGO1.src} alt="Achievement" height={60} width={120} />
                                    <Image src={LOGO2.src} alt="Achievement" height={39} width={224} />
                                    <Image src={LOGO3.src} alt="Achievement" height={60} width={120} />
                                </div>
                            </div>
                            <div className={`${styles.achievementImg} ${styles.lastBox} animation`}>
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