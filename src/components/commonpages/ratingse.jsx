import { ArrowMenu, Stars } from "@/src/app-constants"
import styles from "@/styles/components/commonpages/ratingsec.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"


const RatingSec = ({ data }) => {
    return (
        <section className={`${styles.contentSec} p-100`}>
            <Container className="h-100">
                <Row>
                    <Col xxl={12}>
                        <div className={styles.contentBg}>
                            <Row className="h-100">
                                <Col lg={6} className="my-auto">
                                    <h3>{data?.title}</h3>
                                    {data?.txt}
                                    <div className={styles.starSec}>
                                        <Stars /> <span>{data?.rating} out of 5 </span> (review rating) Over 1,200+ reviews
                                    </div>
                                    <Link href={data?.link} className="button">{data?.btntxt}<ArrowMenu /></Link>
                                </Col>
                                <Col lg={6} className="my-auto">
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