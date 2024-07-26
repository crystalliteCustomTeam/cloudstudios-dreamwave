import { WorkIcon01, WorkIcon02, WorkIcon03, WorkIcon04 } from "@/src/app-constants"
import styles from "@/styles/home/work.module.scss"
import { Col, Container, Row } from "react-bootstrap"

const data = [
    {
        icon: <WorkIcon01 />,
        txt: "You know your business and what it needs, and we work to understand your challenges and opportunities fully to develop the right goals for your video production.",
    },
    {
        icon: <WorkIcon02 />,
        txt: "A successful video needs rock-solid messaging and strategy. We archieve this by asking the right questions and supplementing with research.",
    },
    {
        icon: <WorkIcon03 />,
        txt: "Our portfolio speaks for itself. We produce high-quality, custom visuals that fit your brand and will impress your audience.",
    },
    {
        icon: <WorkIcon04 />,
        txt: "We are collaborative, consultative, creative, responsive, reliable, and flexible. Our process is designed to be easy, fun, and effective.",
    }
]
const WorkSec = () => {
    return (
        <section className={`${styles.WorkSec} p-100`}>
            <Container className="h-100">
                <Row>
                    <Col xxl={12}>
                        <div className={styles.WorkBg}>
                            <h3 className="spacing">HOW WE WORK</h3>
                            <h2>
                                Hear from our clients why Cloud Studios is the right video partner for you
                            </h2>
                            <p>From startups and non-profits to industry leaders like Uber, Amazon, HubSpot, and Google. But no matter the client, we strategically tailor our approach to support your specific needs to produce compelling videos.</p>

                            <Row className={`${styles.WorkBox} h-100`}>
                                {data.map((item, index) => (
                                    <Col xxl={3} lg={3} md={3} className="my-auto" key={index}>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                {item.icon}
                                            </div>
                                            <p>{item.txt}</p>
                                        </div>
                                    </Col>
                                ))}

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WorkSec