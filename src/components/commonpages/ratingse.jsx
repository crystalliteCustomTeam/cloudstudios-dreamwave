import { Stars } from "@/src/app-constants"
import styles from "@/styles/components/commonpages/ratingsec.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/components/commonbtn"


const RatingSec = ({ data }) => {
    return (
        <section className={`${styles.contentSec} p-100`}>
            <Container className="h-100">
                <Row>
                    <Col xxl={12} xl={12}>
                        <div className={styles.contentBg}>
                            <Row className="h-100">
                                <Col lg={6} md={6} className="my-auto">
                                    <h3>{data?.title}</h3>
                                    {data?.txt}
                                    <div className={styles.starSec}>
                                        <Stars /> <span>{data?.rating} out of 5 </span> (review rating) Over 1,200+ reviews
                                    </div>
                                    <CommonBtn data={data?.btntxt} />
                                </Col>
                                <Col lg={6} md={6} className="my-auto">
                                    <Image src={data?.img} alt="Cloud Studios" width={620} height={400} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RatingSec