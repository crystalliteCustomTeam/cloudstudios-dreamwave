"use client"
import Link from 'next/link'
import { Row, Container, Col } from 'react-bootstrap'
import { useState } from 'react'
import styles from "./styles/faq.module.scss"
import { SubMenuIcon } from '@/src/app-constants'
import Image from 'next/image'
import IMG from "media/lp/explainer-video-animation/faqs.webp"

const FAQs = [
    {
        title: "How long should an explainer video be?",
        txt: "Typically, explainer videos are between 60 to 90 seconds long. This length is ideal for capturing attention and delivering key messages effectively."
    },
    {
        title: "What information do I need to provide?",
        txt: "You should provide details about your product or service, target audience, key messages, and branding guidelines. The more information you provide, the better the video will align with your vision."
    },
    {
        title: "Can I use my voiceover, or do you provide one?",
        txt: "You can use your voiceover, or we can provide professional voiceover services. Just let us know your preference."
    },
    {
        title: "What is the turnaround time for an explainer video?",
        txt: "The typical turnaround time is 4 to 6 weeks, depending on the complexity of the video and feedback response times."
    },
    {
        title: "Can I use the video for multiple platforms?",
        txt: "Yes, the video can be optimized for various platforms such as websites, social media, and presentations. Just specify where you plan to use it."
    }, {
        title: "What are the benefits of using an explainer video?",
        txt: "Explainer videos simplify complex information, increase viewer engagement, boost conversion rates, and enhance brand recognition. They provide a compelling and memorable way to communicate your message to your audience."
    },
]

const FaqsLP = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className={`ptb-100 ${styles.faqSec}`}>
            <Container>
                <Row>
                    <Col lg={12} md={12} className='text-center'>
                        <h2>Answers To <span>Frequently Asked Questions</span></h2>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className={styles.faqTabs}>
                            {FAQs.map((faq, index) => (
                                <div className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`} key={index}>
                                    <div
                                        className={styles.tabTitle}
                                        onClick={() => handleToggle(index)}
                                    >
                                        {faq.title} <SubMenuIcon />
                                    </div>
                                    {activeIndex === index && (
                                        <div className={styles.tabContent}>
                                            {faq.txt}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='m-auto text-center'>
                        <Image src={IMG.src} alt='Faqs' width={518} height={540} />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default FaqsLP
