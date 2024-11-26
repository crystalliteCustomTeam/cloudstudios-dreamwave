// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Banner from "media/lp/explainer-video-animation2/statics-bg.jpg"
import Banner2 from "media/lp/explainer-video-animation2/statics-inner-bg.jpg"
import Banner3 from "media/lp/explainer-video-animation2/statistic-side-img.png"
// Css
import styles from "./statistics.module.scss"
const Statistics = () => {
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
                <h2>Proven Statistics of Explain Art Video</h2>
                <p>
                  There is an immense amount of product animation & graphic
                  content out there but here at Video Explain Art , we make sure
                  our animation service & work stands out.
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles.counterMain}>
            <Image
              src={Banner2}
              alt="banner"
              priority
              draggable={false}
              className={styles.bannerImage}
            />
            <Image
              src={Banner3}
              alt="side_Image"
              draggable={false}
              className={styles.bannerImage2}
            />
            <Row className="justify-content-center gap-xl-4 row-gap-4 align-items-start">
              <Col xl="2" lg="3" xs="6">
                <div className={styles.counter}>
                  <h3>
                    12<sup>+</sup>{" "}
                  </h3>
                  <p>Years Of Experience</p>
                </div>
              </Col>
              <Col xl="2" lg="3" xs="6">
                <div className={styles.counter}>
                  <h3>
                    1600<sup>+</sup>
                  </h3>
                  <p>
                    Videos <br className="d-lg-block d-none" /> Delivered
                  </p>
                </div>
              </Col>
              <Col xl="2" lg="3" xs="6">
                <div className={styles.counter}>
                  <h3>
                    1200<sup>+</sup>
                  </h3>
                  <p>Clients Across The World</p>
                </div>
              </Col>
              <Col xl="2" lg="3" xs="6">
                <div className={styles.counter}>
                  <h3>
                    15<sup>+</sup>
                  </h3>
                  <p>Million Views</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Statistics
