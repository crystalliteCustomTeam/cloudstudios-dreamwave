import styles from "@/styles/components/commonpages/cta.module.scss"
import CommonBtn from "@/src/components/commonbtn"
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
                                <CommonBtn data={data?.btntxt} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaSec