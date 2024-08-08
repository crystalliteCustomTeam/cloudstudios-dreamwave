
"use client"
import { MainLogo } from "@/src/app-constants";
import styles from "@/styles/layout/header.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "@/src/app/layout/navigation";
import { useState, useEffect } from "react";

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
        <section className={`${styles.headerSec} ${scrolled ? styles.active : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={6} className="my-auto">
                        <div className={styles.mainLogo}>
                            <Link href="/" aria-label="Main Link">
                                <MainLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={6} className="my-auto">
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
