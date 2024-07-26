import { ArrowMenu } from "@/src/app-constants"
import styles from "@/styles/components/commonpages/cta.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"


const CtaSec = () => {
    return (
        <section className={`${styles.ctaSec} p-100`}>
            <Container>
                <Row>
                    <Col xxl={12} className="text-center m-auto">
                        <div className={styles.ctaBg}>
                            <div className={styles.ctaContent}>
                                <h2>Cutting-edge 2D Animation Services
                                    are just a tap away!</h2>
                                <Link href="#" className="button">Grab your bag of chips, and let&#39;s get the ball rolling! <ArrowMenu /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaSec