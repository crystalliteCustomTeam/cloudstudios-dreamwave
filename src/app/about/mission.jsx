import styles from "@/styles/about/mission.module.scss"
import { Col, Container, Row } from "react-bootstrap"


const MissionSec = () => {
    return (
        <section className={`${styles.missionSec} p-100`}>
            <Container>
                <Row>
                    <Col xxl={12}>
                        <h3 className="spacing">ABOUT OUR BUSINESS</h3>
                        <h2>Our Mission</h2>
                    </Col>
                    <Col xxl={8}>
                        <p>At Cloud Studios, we&#39;re experts in storytelling. We specialize in transforming business concepts into videos that solve problems. While this includes scriptwriting, it also includes visual direction. We combine engaging and efficient scriptwriting with complementary visuals to propel your business and bring your story to life. Through our expertise in media and business, we&#39;ve been able to create pivotal processes to develop successful videos by defining the goals from an early stage and facilitating a holistic marketing approach through the utilization of your brand.</p>
                    </Col>
                    <Col xxl={4}>
                        <div className={styles.colorChange}>
                            <p>We&#39;re the talented video experts. You&#39;re the talented industry expert. Together, we&#39;re the perfect team. Together, we create successful videos.</p>
                        </div>
                    </Col>
                    <Col xxl={8}>
                        <p>At the same time, you&#39;re the expert in your business. At Explainly, we believe in businesses and their talented employees. While we&#39;re here to guide you through this journey, we&#39;re not here to dictate the vision for a video – our job is to deliver a great video, and a great video is a successful video that you and your company are excited about because it moves your company forward. Whether that means we deliver on YOUR vision or we work together to create that vision, we&#39;re here to work WITH you. We offer the space for talented individuals to help guide videos in a creative direction based on your organization&#39;s successful messaging. This means that we work within your brand guidelines and voice through and through. While we&#39;re more than happy to lead a project from start to finish, we&#39;ve found success in working hand in hand with businesses to develop videos that successfully enable their teams to educate and convert their target audiences.</p>
                    </Col>
                    <Col xxl={4}>
                        <div className={`${styles.colorChange} ${styles.last}`}>
                            <p>– The Cloud Studios Team.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MissionSec