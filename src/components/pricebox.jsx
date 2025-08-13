"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/components/pricing.module.scss"
import Link from 'next/link'
import { BuletIcon, ChatIcon } from '@/src/app-constants'
import CommonBtn from './commonbtn'


const PricingData = [
    {
        package: 'Startup Package',
        price: '$499',
        features: [
            "30 Sec Duration",
            "Script Writing",
            "Custom Artwork",
            "Background Music",
            "Text & Image Compilation",
            "HD Format Video",
            "Dedicated Support",
        ]
    },
    {
        package: 'Classic Package',
        price: '$999',
        features: [
            "30 Sec Duration",
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
        package: 'Premium Package',
        price: '$1599',
        features: [
            "30 Sec Duration",
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
                        <h3 className="spacing">Pricing Plans</h3>
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
                                            <a href="tel:833-666-6684">833-666-6684</a>
                                            <Link href="javascript:parent.LC_API.open_chat_window();" ><ChatIcon />Live Chat</Link>
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