// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Banner from "media/lp/explainer-video-animation2/process-bg.jpg"
import Process from "media/lp/explainer-video-animation2/process-inner-bg.png"
// Css
import styles from "./we-work.module.scss"
const WeWork = () => {
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
                            <h2>How We Work</h2>
                            <p>We've simplified our video production process as much as possible thanks to our years of experience. We have got field experts in each process of video making.</p>
                        </div>
                    </Col>
                    <Col xs="12">
                        <Image src={Process} alt="process" draggable={false} />
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}

export default WeWork
