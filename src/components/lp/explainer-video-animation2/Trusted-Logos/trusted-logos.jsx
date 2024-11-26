// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Logos from "media/lp/explainer-video-animation2/trusted-logo.png"
// Css
import styles from "./trusted-logos.module.scss"

const TrustedLogos = () => {
  return (
    <section>
      <div className={styles.logos}>
        <Container>
          <Row>
            <Col xs="12">
              <Image
                src={Logos}
                alt="logos"
                draggable={false}
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default TrustedLogos
