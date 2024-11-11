"use client"
import styles from "@/styles/lp/custom-explainer-videos/benifits.module.scss"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'

import Icon01 from "media/lp/custom-explainer-videos/icons/benefit-icon-1.png"
import Icon02 from "media/lp/custom-explainer-videos/icons/benefit-icon-2.png"
import Icon03 from "media/lp/custom-explainer-videos/icons/benefit-icon-3.png"
import Icon04 from "media/lp/custom-explainer-videos/icons/benefit-icon-4.png"
import Icon05 from "media/lp/custom-explainer-videos/icons/benefit-icon-5.png"
import { Col, Container, Row } from "react-bootstrap"
import Autoplay from 'embla-carousel-autoplay'

const options = { loop: true }
const slides = [
    {
        tit: (<>Infinite<br />Customization </>),
        txt: "Videos with a motion graphics, 2D & 3D animation may be tailored to meet even the clients' most specific needs. When it comes to making unique and memorable marketing explainer videos that your clients will love and share, this unlimited modification capacity is useful.",
        icon: Icon01.src
    }, {
        tit: (<>Flexible<br />Storytelling </>),
        txt: "2D videos can bring any notion to life via flexible storytelling. Do you want your video to be shot on Mars? Done! Maybe give the characters superpowers? It's no issue! The only limit to 2D - based marketing videos is your imagination.",
        icon: Icon02.src
    }, {
        tit: (<>Centralized<br />Production </>),
        txt: "Video animations are comparatively simple to create because we don't have to explore sites, haul heavy equipment, or wait for ideal weather. Explainer videos are a good solution for consumers who desire a simpler and faster video creation because of their centralized production.",
        icon: Icon03.src
    }, {
        tit: (<>Shareable <br />Content </>),
        txt: "Animated 2Ds are highly brandable, making them an excellent option for sharable branded content. 2D videos can create shared branded material that produces results, whether you want your video to have apparent or subtle branding.",
        icon: Icon04.src
    }, {
        tit: (<>Cost  <br />Effective </>),
        txt: "Branded videos may be dry, especially if the message is complicated. These explainer videos may turn even the most mundane issues into thrilling stories. We can assist you in developing compelling narratives that captivate your audience and communicate your message.",
        icon: Icon05.src
    }
]



const BenefitsSection = () => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()])
    return (
        <section className={styles.benifitSection}>
            <Container>
                <Row>
                    <Col md={8} className="m-auto text-center">
                        <h2>Benefits of <span>Explainer Videos</span></h2>
                        <p>Explainer videos differ from others in that it uses relatable characters and a
                            narrative framework to communicate a message, making the video more
                            psychologically and emotionally attractive.</p>
                    </Col>
                </Row>
            </Container>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((item, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div className={styles.benifitBox}>
                                    <div className={styles.imgBox}>
                                        <Image src={item.icon} alt="icons" width={89} height={89} />
                                    </div>
                                    <h2>{item.tit}</h2>
                                    <p>{item.txt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BenefitsSection