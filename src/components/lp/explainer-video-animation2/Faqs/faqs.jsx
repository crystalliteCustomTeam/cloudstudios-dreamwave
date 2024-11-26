"use client"
// Next
import Image from "next/image"
// React
import { useState } from "react"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./faqs.module.scss"
// Media
import Arrow from "media/lp/explainer-video-animation2/down-arrow.png"
import Banner from "media/lp/explainer-video-animation2/faq-bg.jpg"
import SideImage from "media/lp/explainer-video-animation2/faq-side-img.png"
const Faqs = () => {
  const FAQs = [
    [
      "How long should an explainer video be?",
      "Typically, explainer videos are between 60 to 90 seconds long. This length is ideal for capturing attention and delivering key messages effectively.",
    ],
    [
      "What information do I need to provide?",
      "You should provide details about your product or service, target audience, key messages, and branding guidelines. The more information you provide, the better the video will align with your vision.",
    ],
    [
      "Can I use my voiceover, or do you provide one?",
      "You can use your voiceover, or we can provide professional voiceover services. Just let us know your preference.",
    ],
    [
      "What is the turnaround time for an explainer video?",
      "The typical turnaround time is 4 to 6 weeks, depending on the complexity of the video and feedback response times.",
    ],
    [
      "Can I use the video for multiple platforms?",
      "Yes, the video can be optimized for various platforms such as websites, social media, and presentations. Just specify where you plan to use it.",
    ],
    [
      "What are the benefits of using an explainer video?",
      "Explainer videos simplify complex information, increase viewer engagement, boost conversion rates, and enhance brand recognition. They provide a compelling and memorable way to communicate your message to your audience.",
    ],
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = (i) => {
    setActiveIndex(i === activeIndex ? null : i)
  }
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
          <Row className="align-items-center">
            <Col xl="7" lg="6" xs="12">
              <div className={styles.content}>
                <h2>FAQS</h2>
                <p>
                  We have piled up a list of common questions that are usually
                  asked by new clients who show their interest in hiring our
                  services. You may get your answer to the following questions
                  if you have any in your mind.
                </p>
              </div>
              {FAQs &&
                FAQs?.map(([title, desc], i) => (
                  <div className={styles.faqs}>
                    <button
                      type="button"
                      onClick={() => handleToggle(i)}
                      className={`${styles.faqsTab} ${
                        activeIndex === i ? styles.active : ""
                      }`}
                    >
                      <Image
                        src={Arrow}
                        alt="icon"
                        width={15}
                        height={15}
                        className={activeIndex === i ? styles.active : ""}
                      />
                      <span className="d-block">{title}</span>
                    </button>
                    {activeIndex === i && (
                      <div
                        className={`${styles.faqsContent}  ${
                          activeIndex === i ? styles.active : ""
                        }`}
                      >
                        <p>{desc}</p>
                      </div>
                    )}
                  </div>
                ))}
            </Col>
            <Col xl="5" lg="6" xs="12">
              <Image src={SideImage} alt="side_image" className="img-fluid mx-auto" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Faqs
