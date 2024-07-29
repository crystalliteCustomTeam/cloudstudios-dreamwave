
import styles from "@/styles/components/commonpages/elevate.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ElevateSlider from "@/src/components/commonpages/elevateslider"

const OPTIONS = { align: 'center', dragFree: true, loop: true }



const ElevateSec = ({ slides, data }) => {
    return (
        <section className={`${styles.elevateSec} p-100`}>
            <Container>
                <Row>
                    <Col lg={12} className={`${styles.borderTopStyle} text-center m-auto`}>
                        <h2>{data?.title}</h2>
                        {data?.txt}
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <ElevateSlider slides={slides} options={OPTIONS} />
            </Container>
        </section>
    )
}

export default ElevateSec