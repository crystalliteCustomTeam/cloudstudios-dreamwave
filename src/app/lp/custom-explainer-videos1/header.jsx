import { MainLogo } from "@/src/app-constants"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/lp/custom-explainer-videos/header.module.scss"


const Header = () => {
    return (
        <section className={styles.headerLP}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} sm={4} xs={4} className="my-auto">
                        <div className={styles.mainLogo}>
                            <Link href="/" aria-label="Main Link">
                                <MainLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} sm={8} xs={8} className="my-auto">
                        <ul>
                            <li>Chat Now</li>
                            <li><a href="tel:18336666684">1-833-666-6684</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header