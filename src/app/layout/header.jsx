import { ArrowMenu, ChatIcon, MainLogo } from "@/src/app-constants"
import styles from "@/styles/layout/header.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"


const Header = () => {
    return (
        <section className={styles.headerSec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={2} xl={2} lg={2} md={6} xs={6} className="my-auto">
                        <div className={styles.mainLogo}>
                            <Link href="/">
                                <MainLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col xxl={10} xl={10} lg={10} md={6} xs={6} className="my-auto">
                        <div className={styles.mainMenu}>
                            <ul>
                                <li>
                                    <Link href="#">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/2d-animation">Services</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link href="#">Pricing</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#" className={styles.button}>Get Started <ArrowMenu /></Link>
                                </li>
                                <li>
                                    <Link href="#"><ChatIcon />Live Chat</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header