import styles from "@/styles/components/commonpages/contentsec.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/components/commonbtn"


const ContentSec = ({ data }) => {
    return (
        <section className={`${styles.contentSec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={6} className="my-auto order-2 order-md-1">
                        <Image src={data?.img} alt="Cloud Studios" width={650} height={465} />
                    </Col>
                    <Col lg={6} md={6} className="my-auto order-1 order-md-2">
                        <h3>{data?.title}</h3>
                        {data?.txt}
                        <CommonBtn data={data?.btntxt} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec