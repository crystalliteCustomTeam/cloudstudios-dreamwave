"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/components/pricing.module.scss"
import Link from 'next/link'
import { BuletIcon, ChatIcon } from '@/src/app-constants'
import CommonBtn from '../../../components/commonbtn'


const PricingData = [
    {
        package: 'Video Basic',
        price: '$155',
        features: [
            "60 Sec Duration",
            "Script Writing",
            "Custom Artwork",
            "Background Music",
            "Text & Image Compilation",
            "HD Format Video",
            "Dedicated Support",
        ]
    },
    {
        package: 'Video Plus',
        price: '$499',
        features: [
            "60 Sec Duration",
            "Script Writing",
            "Professional Voice- over & SFX",
            "Hand-drawn Illustrations",
            "Whiteboard or Motion Graphics Animation",
            "Unlimited Revisions",
            "HD Format Video",
            "Dedicated Support",
        ]
    },
    {
        package: 'Video Classic',
        price: '$799',
        features: [
            "60 Sec Duration",
            "Script Writing",
            "Professional Voice-over & SFX",
            "Custom 2D Character Illustration",
            "Ultimate 2D Animation",
            "Unlimited Revisions",
            "HD Format Video",
            "Dedicated Support",
        ]
    }
]
const PriceBox = () => {
    return (
        <section className={`p-100 ${styles.pricingSec}`}>
            <Container>
                <Row>
                    <Col xxl={7} xl={7} lg={6} md={8} className="m-auto text-center">
                        <h3 className="spacing">Explainer Video Pricing Plans</h3>
                        <h2>Easy on the pocket and the eyes.</h2>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.pricingBox}>
                            {PricingData.map((plan, index) => (
                                <div key={index} className={styles.pricingItem}>
                                    <div className={styles.headerBox}>
                                        <div className={styles.title}>{plan.package}</div>
                                        <div className={styles.price}>{plan.price}</div>
                                    </div>
                                    <div className={styles.conntentBox}>
                                        <ul>
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx}><BuletIcon /> {feature}</li>
                                            ))}
                                        </ul>
                                        {/* <div className={styles.callBox}>
                                            <Link href="">Get A Call For Free Consultation</Link>
                                        </div> */}
                                        <div className={styles.callBox}>
                                            <CommonBtn btnStyle={styles.callBoxBtn} iconSize={16} btnicon={false} data="Get A Call For Free Consultation" />
                                        </div>
                                        <div className={styles.footerBox}>
                                            <a href="tel:800-253-1448">800-253-1448</a>
                                            <Link href="" onClick={() => Tawk_API && Tawk_API.toggle()}><ChatIcon />Live Chat</Link>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default PriceBox