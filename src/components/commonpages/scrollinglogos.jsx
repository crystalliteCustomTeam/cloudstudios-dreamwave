
import styles from "@/styles/components/commonpages/scrollinglogos.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ScrollingSlider from "@/src/components/scrollingslider"
import LOGO1 from "media/commonpages/srollinglogos/logo1.webp"
import LOGO2 from "media/commonpages/srollinglogos/logo2.webp"
import CommonBtn from "@/src/components/commonbtn"


const ScrollingLogos = ({ data }) => {
    return (
        <section className={`${styles.scrollingLogos} p-100`}>
            <Container>
                <Row>
                    <Col lg={12} className={`${styles.borderTopStyle} text-center m-auto`}>
                        <h2>{data?.title}</h2>
                        <h4>{data?.subtitle}</h4>
                        {data?.txt}
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <div className={`${styles.scrolSlide} ${styles.left}`}>
                    <ScrollingSlider data={LOGO1} dir="left" />
                </div>
                <div className={`${styles.scrolSlide} ${styles.right}`}>
                    <ScrollingSlider data={LOGO2} dir="right" />
                </div>

            </Container>
            <Container>
                <Row>
                    <Col lg={12} className={`${styles.borderBottomStyle} text-center m-auto`}>
                        <CommonBtn data="Make an Animation" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ScrollingLogos