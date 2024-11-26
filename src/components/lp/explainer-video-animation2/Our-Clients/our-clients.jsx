// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Banner from "media/lp/explainer-video-animation2/clinet-logo-bg.jpg"
import Logos from "media/lp/explainer-video-animation2/ftr-cl-logo-img.png"
// Css
import styles from "./our-clients.module.scss"
const OurClients = () => {
  return (
    <section>
      <div className={styles.root}>
        <Image
          src={Banner}
          alt="banner"
          priority
          draggable={false}
          className={styles.bannerImage}
        />
        <Container>
          <Row>
            <Col xs="12">
              <div className={styles.content}>
                <h2>Our Clients</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Image
                src={Logos}
                alt="clients"
                className="img-fluid d-block mx-auto"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default OurClients
