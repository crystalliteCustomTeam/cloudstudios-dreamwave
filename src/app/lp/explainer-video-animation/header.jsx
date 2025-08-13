"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "./styles/header.module.scss"
import Link from "next/link"
import { ChatIcon, MainLogo } from "@/src/app-constants"
import { useState, useEffect } from "react"
import CommonBtnLP from "./common/commonbtnlp"

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
                                <a href="mailto:queries@cloudstudios.us">queries@cloudstudios.us</a>
                            </li>
                            <li className={`${styles.liveChat} buttonLP`}>
                                <Link href="javascript:parent.LC_API.open_chat_window();" aria-label="Live Chat">
                                    <ChatIcon /> Live Chat
                                </Link>
                            </li>
                            <li className={`${styles.gatQuote} buttonLP`}>
                                <CommonBtnLP data="Get A Quote" />
                            </li>
                            <li className={`${styles.callNow} buttonLP`}>
                                <a href="tel:833-666-6684">Call Now : 833-666-6684</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header