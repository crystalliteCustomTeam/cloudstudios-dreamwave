// Next
import Link from "next/link"
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./header.module.scss"
// Components
import { MainLogo } from "@/src/app-constants"
import { CTA } from "../index"
// Media
import MailIcon from "media/lp/explainer-video-animation2/mail.png"
import FlagIcon from "media/lp/explainer-video-animation2/flag-icon.png"
import ChatIcon from "media/lp/explainer-video-animation2/chat.png"

const Header = () => {
  return (
    <section className={`${styles.headerLp}`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={3} sm={6} xs="12" className="m-sm-auto my-3">
            <div className={styles.mainLogo}>
              <Link href="/" aria-label="Main Link">
                <MainLogo />
              </Link>
            </div>
          </Col>
          <Col md={9} sm={6} xs="12" className="m-auto">
            <ul className={styles.headerLinks}>
              <li>
                <a
                  className={styles.emailBtn}
                  href="mailto:queries@cloudstudios.us"
                >
                  <Image src={MailIcon} alt="icons" width={15} height={15} />
                  <span className="d-block">queries@cloudstudios.us</span>
                </a>
              </li>
              <li>
                <a className={styles.callNow} href="tel:800-253-1448">
                  <Image src={FlagIcon} alt="icons" width={15} height={15} />
                  <span className="d-block">Call Now : 800-253-1448</span>
                </a>
              </li>
              <li>
                <a className={styles.liveChat} href="javascript:void(Tawk_API.toggle())" aria-label="Live Chat">
                  <Image src={ChatIcon} alt="icons" width={15} height={15} />
                  <span className="d-block">Live Chat</span>
                </a>
              </li>
              <CTA css={styles.modal}/>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Header
