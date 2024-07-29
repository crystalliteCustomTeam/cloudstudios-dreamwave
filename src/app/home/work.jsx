import { WorkIcon01, WorkIcon02, WorkIcon03, WorkIcon04 } from "@/src/app-constants"
import styles from "@/styles/home/work.module.scss"
import { Col, Container, Row } from "react-bootstrap"

const data = [
    {
        icon: <WorkIcon01 />,
        tit: "Brainstormed",
        txt: "The journey begins with an unfathomable brainstorming phase, where the studio deeply digs to understand the client's brand, target audience, and critical messaging goals. This collaborative effort allows the team to uncover the essence of the client's story and determine the most impactful way to bring it to life.",
    },
    {
        icon: <WorkIcon02 />,
        tit: "Conceptualized",
        txt: "The second step is Conceptualization and Ideation, where the studio's creative team harnesses their expertise to brainstorm innovative concepts and narrative approaches. Exploring various visual styles, character designs, and storytelling techniques, the team develops detailed storyboards and mood boards to provide a clear vision for the project.",
    },
    {
        icon: <WorkIcon03 />,
        tit: "Executed",
        txt: "Moving into the Production and Execution phase, Cloud Studios leverages its technical prowess and state-of-the-art tools to bring the approved concepts to life. Maintaining a collaborative workflow, the studio actively involves the client in the iterative process to ensure the final product meets and exceeds their expectations.",
    },
    {
        icon: <WorkIcon04 />,
        tit: "Delivered & Amplified",
        txt: "Finally, the process culminates in delivery, where the completed project is presented to the client, highlighting how the visual narrative elevates their brand storytelling. The studio guides how the client can effectively utilize the animation and visual content to maximize its impact across various platforms and touchpoints.",
    }
]
const WorkSec = () => {
    return (
        <section className={`${styles.WorkSec} p-100`}>
            <Container className="h-100">
                <Row>
                    <Col lg={12}>
                        <div className={styles.WorkBg}>
                            <h3 className="spacing">How Our Process Works?</h3>
                            <h2>
                                Our processes are simple yet groundbreaking—four easy steps, a lot of visual engineering, and immersive storytelling.
                            </h2>
                            <p>From 2D and 3D animation to motion graphics, architectural visualizations, hybrid animation, and cutting-edge CGI VFX, our animation experts deliver it all!</p>

                            <Row className={`${styles.WorkBox} h-100`}>
                                {data.map((item, index) => (
                                    <Col xl={3} lg={6} md={6} className="my-auto" key={index}>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                {item.icon}
                                            </div>
                                            <h5>{item.tit}</h5>
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