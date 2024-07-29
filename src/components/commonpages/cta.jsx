import { ArrowMenu } from "@/src/app-constants"
import styles from "@/styles/components/commonpages/cta.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"


const CtaSec = ({ data }) => {
    return (
        <section className={`${styles.ctaSec} p-100`}>
            <Container>
                <Row>
                    <Col xxl={12} className="text-center m-auto">
                        <div className={styles.ctaBg}>
                            <div className={styles.ctaContent}>
                                <h2>{data?.title}</h2>
                                <Link href="#" className="button">{data?.btntxt}<ArrowMenu /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaSec