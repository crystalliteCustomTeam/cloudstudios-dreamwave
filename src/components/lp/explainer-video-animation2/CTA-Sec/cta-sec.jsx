// Next
import Image from "next/image"
// CSS
import styles from "./cta-sec.module.scss"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Banner from "media/lp/explainer-video-animation2/cta-bg.jpg"
import SideImage from "media/lp/explainer-video-animation2/cta-rht-img.png"
import SideImage2 from "media/lp/explainer-video-animation2/cta-lft-img.png"
import FlagIcon from "media/lp/explainer-video-animation2/flag-icon.png"
// Components
import { CTA } from "../index"

const CTASec = ({
  title = "Start Displaying Your Brand with Amazing Animated Videos",
  desc = "Spread profound message and scale up your business with our animated video services today!",
  call = true,
}) => {
  return (
    <div className={styles.root}>
      <Image
        src={Banner}
        alt="banner"
        priority
        draggable={false}
        className={styles.bannerImage}
      />
      <Image
        src={SideImage}
        alt="side_image"
        priority
        draggable={false}
        className={styles.bannerImage2}
      />
      <Image
        src={SideImage2}
        alt="side_image_two"
        priority
        draggable={false}
        className={styles.bannerImage3}
      />
      <Container>
        <Row>
          <Col xl="10" lg="12">
            <div className={styles.content}>
              <h2>{title}</h2>
              <p>{desc}</p>
              <div className="d-flex flex-wrap justify-content-sm-start justify-content-center align-items-center gap-4">
                <CTA text="Get Started" css={styles.modal} />
                <CTA modal={false} />
                {call && (
                  <a className={styles.callNow} href="tel:833-666-6684">
                    <Image src={FlagIcon} alt="icons" width={25} height={25} />
                    <span className="d-block">+1-833-666-6684</span>
                  </a>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CTASec
