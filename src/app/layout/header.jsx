"use client"
import { ArrowMenu, ChatIcon, MainLogo, NavIcon } from "@/src/app-constants";
import styles from "@/styles/layout/header.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const checkScreenSize = () => {
            if (typeof window !== 'undefined') {
                const isMobile = window.innerWidth <= 800;
                setIsMobileView(isMobile);
                if (!isMobile && isActive) {
                    // Close menu if it's active and screen width is greater than 800px
                    handleClosed();
                }
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const handleClosed = () => {
        setIsActive(false);
        document.body.classList.remove('active');
    };
    return (
        <section className={styles.headerSec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={6} className="my-auto">
                        <div className={styles.mainLogo}>
                            <Link href="/">
                                <MainLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={6} className="my-auto">
                        <div onClick={handleClick}
                            className={`${isActive ? 'navIcon active' : 'navIcon'}`}>
                            <NavIcon />
                        </div>
                        <div className={`${styles.mainMenu} ${isActive ? `${styles.active}` : ''}`}>
                            <ul>
                                <li className={pathname === "/" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="/" aria-label="Home Page">
                                        Home
                                    </Link>
                                </li>
                                <li className={pathname === "/about" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="/about" aria-label="About Page">
                                        About
                                    </Link>
                                </li>
                                <li className={pathname === "/2d-animations" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="/2d-animations" aria-label="Services Page">
                                        Services
                                    </Link>
                                </li>
                                <li className={pathname === "/portfolio" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="/portfolio" aria-label="Portfolio Page">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Pricing
                                    </Link>
                                </li>
                                <li className={pathname === "/contact" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="/contact" aria-label="Contact Page">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={styles.button} aria-label="Get Started" onClick={isMobileView ? handleClosed : undefined}>
                                        Get Started <ArrowMenu />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" aria-label="Live Chat" >
                                        <ChatIcon />Live Chat
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
