"use client"
import { ArrowMenu, ChatIcon, MainLogo } from "@/src/app-constants";
import styles from "@/styles/layout/header.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
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
                        <div className={styles.mainMenu}>
                            <ul>
                                <li className={pathname === "/" ? styles.active : ""}>
                                    <Link href="/" aria-label="Home Page">
                                        Home
                                    </Link>
                                </li>
                                <li className={pathname === "/about" ? styles.active : ""}>
                                    <Link href="/about" aria-label="About Page">
                                        About
                                    </Link>
                                </li>
                                <li className={pathname === "/2d-animations" ? styles.active : ""}>
                                    <Link href="/2d-animations" aria-label="Services Page">
                                        Services
                                    </Link>
                                </li>
                                <li className={pathname === "/portfolio" ? styles.active : ""}>
                                    <Link href="/portfolio" aria-label="Portfolio Page">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Pricing
                                    </Link>
                                </li>
                                <li className={pathname === "/contact" ? styles.active : ""}>
                                    <Link href="/contact" aria-label="Contact Page">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={styles.button} aria-label="Get Started">
                                        Get Started <ArrowMenu />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" aria-label="Live Chat">
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
