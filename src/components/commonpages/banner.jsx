import styles from "@/styles/components/commonpages/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import VideoPlayer from "@/src/components/videoplayer"


const Banner = () => {
    return (
        <section className={styles.commonBanner}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={10} className="m-auto">
                        <VideoPlayer bannerVideo="/media/video/2d-animations.mp4" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner