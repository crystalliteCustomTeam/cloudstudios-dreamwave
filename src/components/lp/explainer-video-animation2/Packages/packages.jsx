// JSON
import data from "./data.json"
// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./packages.module.scss"
// Media
import Banner from "media/lp/explainer-video-animation2/price-bg.jpg"
import Icon from "media/lp/explainer-video-animation2/price-img-1.png"
import { CTA } from ".."
const Packages = () => {
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
                <h2>Our Packages</h2>
                <p>
                  You've visited the right website if you're looking for
                  top-of-the-line video animation experts in the US.
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles.packageCards}>
            <Row className="row-gap-4 justify-content-center">
              {data.map(({ name, desc, price, list }, i) => (
                <Col key={i} xl="4" md="6" xs="12">
                  <div className={`${styles.card} ${styles[`card${i + 1}`]}`}>
                    <span className={styles.overlay}></span>
                    <h3>{name}</h3>
                    <Image src={Icon} alt="icon" />
                    <span className="d-block">{desc}</span>
                    <h4>${price}</h4>
                    <ul className={`${styles[`ul${i + 1}`]}`}>
                      {list.map((e, i) => (
                        <li key={i}>
                          <span className="d-block">{e}</span>
                        </li>
                      ))}
                    </ul>
                    <Row>
                      <Col xs="6">
                        <div className={styles.leftCTA}>
                          <a href="tel:+1-800-253-1448">
                            <span className="d-block">speak with us</span>
                            <span className="d-block">+1-800-253-1448</span>
                          </a>
                          <CTA />
                        </div>
                      </Col>
                      <Col xs="6">
                        <div className={styles.rightCTA}>
                          <a href="javascript:void(Tawk_API.toggle())" aria-label="Live Chat">
                            <span className="d-block">Want to Discuss</span>
                            <span className="d-block">Live Chat Now</span>
                          </a>
                          <CTA modal={false} css2={styles.liveChat} />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Packages
