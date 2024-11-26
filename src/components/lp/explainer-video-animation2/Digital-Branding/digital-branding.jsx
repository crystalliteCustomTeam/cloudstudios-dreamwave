// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./digital-branding.module.scss"
// Media
import Banner from "media/lp/explainer-video-animation2/why-ex-bg.jpg"
import Icon1 from "media/lp/explainer-video-animation2/why-ex-icon1.png"
import Icon2 from "media/lp/explainer-video-animation2/why-ex-icon2.png"
import Icon3 from "media/lp/explainer-video-animation2/why-ex-icon3.png"
const DigitalBranding = () => {
  return (
    <section>
      <div className={styles.root}>
        <Image
          src={Banner}
          alt="banner"
          draggable={false}
          className={styles.bannerImage}
        />
        <Container>
          <Row>
            <Col xs="12">
              <div className={styles.content}>
                <h2>Why Explainer Videos Are Key to Digital Branding</h2>
                <p>
                  Simple words or symbols do not attract as many people as video
                  animation does. If you're about to introduce a product or
                  service, animated videos are the perfect way to make a shout
                  out on the digital landscapes.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center row-gap-3">
            {[
              [
                Icon1,
                "Brand Video",
                "We craft animated videos to improve your brand’s presence and it requires a different approach to adopt.",
              ],
              [
                Icon2,
                "2D, 3D Animated Videos",
                "We make compelling and highly engaging 2D and 3D videos in a variety of styles and at various levels of difficulty.",
              ],
              [
                Icon3,
                "Commercial Videos",
                "We produce exceptional commercial videos that will keep your clients hooked and boost your brand engagement.",
              ],
            ].map(([img, title, desc], i) => (
              <Col key={i} xl="4" md="6" xs="12">
                <div className={styles.card}>
                  <Image src={img} alt="icons" />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default DigitalBranding
