import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./styles/award.module.scss"
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import icon1 from "media/lp/explainer-video-animation/Awards/banner-logo-1.png";
import icon2 from "media/lp/explainer-video-animation/Awards/banner-logo-2.png";
import icon4 from "media/lp/explainer-video-animation/Awards/banner-logo-4.png";
import icon6 from "media/lp/explainer-video-animation/Awards/banner-logo-6.png";
import icon7 from "media/lp/explainer-video-animation/Awards/banner-logo-7.png";
import icon8 from "media/lp/explainer-video-animation/Awards/banner-logo-8.png";
import icon9 from "media/lp/explainer-video-animation/Awards/banner-logo-9.png";
import icon10 from "media/lp/explainer-video-animation/Awards/banner-logo-10.png";
import icon12 from "media/lp/explainer-video-animation/Awards/banner-logo-12.png";
import icon13 from "media/lp/explainer-video-animation/Awards/banner-logo-13.png";
import icon14 from "media/lp/explainer-video-animation/Awards/banner-logo-14.png";
import icon15 from "media/lp/explainer-video-animation/Awards/banner-logo-15.png";
import icon16 from "media/lp/explainer-video-animation/Awards/banner-logo-16.png";
import icon17 from "media/lp/explainer-video-animation/Awards/banner-logo-17.png";
import icon18 from "media/lp/explainer-video-animation/Awards/banner-logo-18.png";
import icon19 from "media/lp/explainer-video-animation/Awards/banner-logo-19.png";



const data = [
    icon1,
    icon2,
    icon4,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon12,
    icon13,
    icon14,
    icon15,
    icon16,
    icon17,
    icon18,
    icon19,
]

const Award = () => {
    return (
        <section className={styles.awardSec}>
            <Container>
                <Row>
                    <Col lg={12} className={styles.awardContent}>

                        <h2>An <span>Award-Winning Video</span> Animation Company</h2>
                        <p>At Cloud Studios Inc, we create powerful video animations that elevate your brand. Our dedication to excellence has earned us numerous awards and accolades, including:</p>
                        <Marquee pauseOnHover={true} className={styles.marqueeBox}>
                            {data.map((icon, index) => (
                                <Image
                                    key={index}
                                    src={icon}
                                    alt={`Award logo ${index + 1}`}
                                    width={200}
                                    height={120}
                                />
                            ))}
                        </Marquee>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Award