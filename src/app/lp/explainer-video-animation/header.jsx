"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "./styles/header.module.scss"
import Link from "next/link"
import { ChatIcon, MainLogo } from "@/src/app-constants"
import CommonBtnLP from "./commonbtnLP"
import { useState, useEffect } from "react"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className={`${styles.headerLp} ${scrolled ? styles.active : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={3} xs={6} className="m-auto">
                        <div className={styles.mainLogo}>
                            <Link href="/" aria-label="Main Link">
                                <MainLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col md={9} xs={6} className="m-auto">
                        <ul className={styles.headerLinks}>
                            <li className={styles.emailBtn}>
                                <a href="mailto:queries@infinityanimations.com">queries@infinityanimations.com</a>
                            </li>
                            <li className={`${styles.liveChat} buttonLP`}>
                                <Link href="#" aria-label="Live Chat">
                                    <ChatIcon /> Live Chat
                                </Link>
                            </li>
                            <li className={`${styles.gatQuote} buttonLP`}>
                                <CommonBtnLP data="Get A Quote" />
                            </li>
                            <li className={`${styles.callNow} buttonLP`}>
                                <a href="tel:1-833-666-6689">Call Now : 1-833-666-6689</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header