// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Banner from "media/lp/explainer-video-animation2/testi-bg.jpg"
import SideImage from "media/lp/explainer-video-animation2/testi-bf.png"
import Quote from "media/lp/explainer-video-animation2/quote.png"
import Avater1 from "media/lp/explainer-video-animation2/testi-img1.png"
import Avater2 from "media/lp/explainer-video-animation2/testi-img2.png"
import Avater3 from "media/lp/explainer-video-animation2/testi-img3.png"
import Star from "media/lp/explainer-video-animation2/star.png"
// Css
import styles from "./reviews.module.scss"
import { EmblaCarousel } from "../index"

const Reviews = () => {
    const OPTIONS = { align: 'start', loop: true }
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
        <Image
          src={SideImage}
          alt="side_image"
          priority
          draggable={false}
          className={styles.bannerImage2}
        />
        <Container>
          <Row>
            <Col>
              <div className={styles.content}>
                <h2>How Our Clients Are Thanking Us</h2>
                <p>
                  Our experts leave no stone unturned in providing the desired
                  outcome of our clients
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center row-gap-5 d-md-flex d-none">
            {
                [
                    ["From start to finish, the process was incredibly easy. It was a pleasure to work with the Explain Art Videos squad.",Avater1,"Jennifer Aswat"],
                    ["The story of the business relationship started with a 30 second video in 2019, now Explain Art Video team has produced 27 videos for our multiple brands for us. Glad to get a reliable company in the US",Avater2,"David Manks"],
                    ["The whole team of Explain Art Video was extremely responsive and helpful. The videos were produced on time. The creatives were excellent and I personally liked the concept. Highly recommended. ",Avater3,"Jason Gawkwad"],
                ].map(([desc,avater,name],i)=>(
                    <Col key={i} lg="4" md="6">
              <div className={styles.testCard}>
                <Image src={Quote} alt="icons" width={70} height={75} />
                <p>{desc}</p>
                <div className={styles.id}>
                  <Image src={avater} alt="avaters" />
                  <div className={styles.content}>
                    <span className="d-block">{name}</span>
                    {[Star, Star, Star, Star, Star].map((e, i) => (
                      <Image key={i} src={e} alt="icons" />
                    ))}
                  </div>
                </div>
              </div>
            </Col>
                ))
            }
          </Row>
          <EmblaCarousel options={OPTIONS}/>
        </Container>
      </div>
    </section>
  )
}

export default Reviews
