
"use client"
import styles from "@/styles/components/mainbanner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerImg from "media/portfolio/bannerImg.webp"
import Image from "next/image"
import { Stars } from "@/src/app-constants"
import CommonBtn from "@/src/components/commonbtn"
import VideoPlayer from "./videoplayer"



const MainBanner = ({ data }) => {
    return (
        <>
            <section className={styles.mainBanner}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col xxl={6} xl={6} lg={6} md={6} className="my-auto">
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
                                <CommonBtn data="Get Started" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <VideoPlayer iframeUrl={data.video} />
            </section>

        </>
    )
}

export default MainBanner