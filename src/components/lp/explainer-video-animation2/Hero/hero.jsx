import Image from "next/image"
import styles from "./hero.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import CheckIcon from "media/lp/explainer-video-animation2/check.png"
import Banner from "media/lp/explainer-video-animation2/banner.jpg"
import Logos from "media/lp/explainer-video-animation2/bnr-logo.png"
import ChatIcon from "media/lp/explainer-video-animation2/chat-icon.png"
import SideImage from "media/lp/explainer-video-animation2/bnr-side-img-bf.png"
import { ContactForm, CTA } from ".."
const Hero = () => {
  return (
    <section>
      <div className={styles.root}>
        <Image src={Banner} alt="banner" priority draggable={false} className={styles.bannerImage}/>
        <Image src={SideImage} alt="side_image" priority draggable={false} className={styles.bannerImage2}/>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
            <div className={styles.content}>
                <h1>EXPAND YOUR BRAND’S REACH WITH AN ENGAGING CUSTOM EXPLAINER VIDEO</h1>
                <p>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
                <ul>
                    {
                        [
                            "Full HD Animations",
                            "Appealing Designs",
                            "Latest Technology",
                            "Award-Winning Agency",
                        ].map((e,i)=>(
                            <li key={i}>
                                <Image src={CheckIcon} alt="icons" width={20} height={20}/>
                                <span className="d-inline-block">{e}</span>
                            </li>
                        ))
                    }
                </ul>
                    <Image src={Logos} alt="icons"/>
                    <div className={styles.cta}>
                        <CTA css={styles.ctaModal}/>
                        <a href="javascript:void(Tawk_API.toggle())" aria-label="Live Chat" className={styles.ctaChat}>
                            <Image src={ChatIcon} alt="icons" />
                            <div>
                                <span className="d-block">Talk to our Expert</span>
                                <span className="d-block">Live Chat</span>
                            </div>
                        </a>
                    </div>
            </div>
            </Col>
            <Col xl="5" lg="6" xs="12">
            <ContactForm/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Hero
