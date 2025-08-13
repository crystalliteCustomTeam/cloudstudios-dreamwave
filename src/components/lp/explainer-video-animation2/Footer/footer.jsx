// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./footer.module.scss"
// Media
import Banner from "media/lp/explainer-video-animation2/footer-bg.jpg"
import Payments from "media/lp/explainer-video-animation2/payment-img.png"
import Call from "media/lp/explainer-video-animation2/call_black.png"
import Mail from "media/lp/explainer-video-animation2/mail_black.png"
import Website from "media/lp/explainer-video-animation2/website.png"
import { FooterForm } from "../index"

const Footer = () => {
  return (
    <footer>
      <div className={styles.root}>
        <Image
          src={Banner}
          alt="banner"
          priority
          draggable={false}
          className={styles.bannerImage}
        />
        <Container>
          <Row className="row-gap-4">
            <Col lg="6">
              <div className={styles.content}>
                <h3>Get in Touch Now!</h3>
                <p>Its High Time to Showcase Your Store to the World</p>
              </div>
              <FooterForm />
            </Col>
            <Col lg="6">
              <div className={styles.links}>
                <a href="tel:+1-833-666-6684">
                  <Image src={Call} alt="icons" width={30} height={30} />
                  <span className="d-block">+1-833-666-6684</span>
                </a>
                <a href="mailto:queries@cloudstudios.us">
                  <Image src={Mail} alt="icons" width={30} height={30} />
                  <span className="d-block">queries@cloudstudios.us</span>
                </a>
                <a href="https://cloudstudios.us/">
                  <Image src={Website} alt="icons" width={30} height={30} />
                  <span className="d-block">www.cloudstudios.us</span>
                </a>
                <Image src={Payments} alt="payments" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.copyright}>
        <Container>
          <div className={styles.content}>
            <span className="d-block">Copyright © 2025, Cloud Studios All Rights Reserved</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
