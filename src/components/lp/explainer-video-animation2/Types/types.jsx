// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./types.module.scss"
// Media
import Icon1 from "media/lp/explainer-video-animation2/ty-ex-icon-1.png"
import Icon2 from "media/lp/explainer-video-animation2/ty-ex-icon-2.png"
import Icon3 from "media/lp/explainer-video-animation2/ty-ex-icon-3.png"
import Icon4 from "media/lp/explainer-video-animation2/ty-ex-icon-4.png"
import Icon5 from "media/lp/explainer-video-animation2/ty-ex-icon-5.png"
import Icon6 from "media/lp/explainer-video-animation2/ty-ex-icon-6.png"
const Types = () => {
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <Row>
            <Col xs="12">
              <div className={styles.content}>
                <h2>Types of Explainer Videos</h2>
                <p>
                  Explain Art Video is a renowned name in the video animation
                  industry. Our experts produce all types of animation videos
                  with the usage of modern devices and techniques, some are
                  discussed below:
                </p>
              </div>
            </Col>
          </Row>
          <Row className="row-gap-4">
            {[
              [
                Icon1,
                "Whiteboard Animation Video",
                "Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.",
              ],
              [
                Icon2,
                "Motion Graphics",
                "Again, motion graphics animation videos are known for being simple and engaging. It's the perfect animation style for businesses looking to show off a wide variety of goods or services.",
              ],
              [
                Icon3,
                "2D Character Animation Videos",
                "2D animation is one of the most widely used and common animation forms today. Because of its versatility, 2D animation allows for a lot of artistic freedom when it comes to adding the next stage of customization.",
              ],
              [
                Icon4,
                "3D Animation Video",
                "Because of its high-end and high-quality finish, 3D animation has carved out a niche for itself. With a narrative focus on the action, the distinctive aesthetics of 3D animation make it easier for viewers to interact with what is being seen in the video.",
              ],
              [
                Icon5,
                "Screencast Videos",
                "It is a popular tool for startups in the technology world. It's a fantastic way to explain a procedure or film a demo video.",
              ],
              [
                Icon6,
                "Typography Videos",
                "Typography animation can render a video by effectively underlining and memorably reinforcing the message with the use of clever fonts and animation.",
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

export default Types
