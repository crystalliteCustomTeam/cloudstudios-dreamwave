import styles from "@/styles/home/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerBg from "media/home/banner/BannerBg.webp"

const Banner = () => {
    return (
        <section className={styles.bannerSec} style={{ backgroundImage: `url(${BannerBg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col className="my-auto">

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner