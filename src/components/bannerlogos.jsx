import styles from "@/styles/components/bannerlogos.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/home/banner/bannerLogo.webp"

const BannerLogos = () => {
    return (
        <section className={styles.bannerLogoSec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={12} className="my-auto">
                        <div className={styles.logoSec}>
                            <Image src={IMG} alt="Cloud Studios" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerLogos