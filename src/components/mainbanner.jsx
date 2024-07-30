import styles from "@/styles/components/mainbanner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerImg from "media/portfolio/bannerImg.webp"
import Image from "next/image"
import Link from "next/link"
import { ArrowMenu, Stars } from "../app-constants"



const MainBanner = ({ data }) => {
    return (
        <section className={styles.mainBanner} style={{ backgroundImage: `url(${data.img})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={6} xl={6} lg={6} md={8} className="my-auto">
                        <div className={styles.bannerContentBox}>
                            {data?.rating && (
                                <div className={styles.bannerRating}>
                                    {data.star && <Stars />}
                                    {data.rating}
                                </div>
                            )}
                            <h1>{data.title}</h1>
                            {data.txt}
                            <div className={styles.bannerImg}>
                                <Image src={BannerImg.src} alt="Cloud Studios" height={58} width={499} priority />
                            </div>
                            <Link href={data.link} className="button">Get Started <ArrowMenu /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MainBanner