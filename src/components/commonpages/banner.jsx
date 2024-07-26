import styles from "@/styles/components/commonpages/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"


const Banner = () => {
    return (
        <section className={styles.commonBanner}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={10} className="m-auto">
                        <div className={styles.bannerContent}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1034.5"
                                height="475"
                                viewBox="0 0 1034.5 475"
                            >
                                <g data-name="Group 7512" transform="translate(-385.5 -371)">
                                    <text
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="5"
                                        data-name="2D"
                                        fontFamily="SegoeUI-Bold, Segoe UI"
                                        fontSize="349"
                                        fontWeight="700"
                                        transform="translate(390.5 753)"
                                    >
                                        <tspan x="0" y="0">
                                            2D
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Poppins-Medium, Poppins"
                                        fontSize="129"
                                        fontWeight="500"
                                        transform="translate(673 685)"
                                    >
                                        <tspan x="0" y="0">
                                            Animations
                                        </tspan>
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner