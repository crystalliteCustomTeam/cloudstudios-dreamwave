import { ArrowMenu } from "@/src/app-constants"
import styles from "@/styles/components/commonpages/contentsec.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"


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
                        <Link href={data?.link} className="button">{data?.btntxt} <ArrowMenu /></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec