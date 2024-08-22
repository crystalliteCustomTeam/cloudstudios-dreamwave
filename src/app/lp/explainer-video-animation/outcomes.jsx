import { Col, Container, Row } from 'react-bootstrap'
import styles from "./styles/outcomes.module.scss"
import IMG01 from "media/lp/explainer-video-animation/outcomes/remark1.png"
import IMG02 from "media/lp/explainer-video-animation/outcomes/remark2.png"
import IMG03 from "media/lp/explainer-video-animation/outcomes/remark3.png"
import IMG04 from "media/lp/explainer-video-animation/outcomes/remark4.png"
import IMG05 from "media/lp/explainer-video-animation/outcomes/remark5.png"
import IMG06 from "media/lp/explainer-video-animation/outcomes/remark6.png"
import IMG07 from "media/lp/explainer-video-animation/outcomes/remark7.png"
import IMG08 from "media/lp/explainer-video-animation/outcomes/remark8.png"
import IMG09 from "media/lp/explainer-video-animation/outcomes/remark9.png"
import Image from 'next/image'

const OutcomesLP = () => {
    return (
        <section className={styles.outcomesLP}>
            <Container>
                <Row>
                    <Col lg={12} className='m-auto text-center'>
                        <h2>How Infinity Animations <span>Achieve Remarkable</span> Outcomes</h2>
                        <p>At Infinity Animations, our meticulous work process is intricately crafted to yield flawless outcomes, whether for large-scale endeavors or smaller projects. Every detail is considered in our comprehensive approach to ensure excellence in every animation project.</p>
                    </Col>
                    <Col md={7}>
                        <div className={`${styles.outcomesBox} ${styles.outcomesBlack}`} style={{ background: '#F4F4F4' }}>
                            <h3>Concept and Storyboards</h3>
                            <p>Develop initial ideas and sketch scenes to visualize the narrative, setting the foundation for the project’s direction and flow.</p>
                            <Image src={IMG01.src} alt="Concept and Storyboards" width={468} height={336} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={`${styles.outcomesBox}`} style={{ background: '#0E80FC' }}>
                            <h3>Texturing</h3>
                            <p>Apply textures to models to enhance their appearance, adding details like colors, patterns, and surface finishes.</p>
                            <Image src={IMG02.src} alt="Texturing" width={445} height={320} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={`${styles.outcomesBox}`} style={{ background: 'linear-gradient(to right, #19edda, #09b7e4)' }}>
                            <h3>Rigging</h3>
                            <p>Create skeletal structures for models, allowing them to move and deform naturally during animation.</p>
                            <Image src={IMG03.src} alt="Rigging" width={389} height={321} />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={`${styles.outcomesBox}`} style={{ background: 'linear-gradient(to right, #6b00fe, #aa00fe)' }}>
                            <h3>Lighting</h3>
                            <p>Design and position lights in the scene to enhance mood, highlight details, and create realistic visual effects.</p>
                            <Image src={IMG04.src} alt="Lighting" width={549} height={350} className={styles.imgMove5} />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={`${styles.outcomesBox} ${styles.outcomesBlack}`} style={{ background: '#F4F4F4' }}>
                            <h3>Animation</h3>
                            <p>Bring characters and objects to life through movement, following the storyboard and rigging setups to achieve desired actions.</p>
                            <Image src={IMG05.src} alt="Animation" width={376} height={390} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={`${styles.outcomesBox}`} style={{ background: 'linear-gradient(to right, #ff8e0a, #ffab4a)' }}>
                            <h3>Compositing and Special VFX</h3>
                            <p>Combine various visual elements and add special effects to create a cohesive and striking final image.</p>
                            <Image src={IMG06.src} alt="Compositing and Special VFX" width={477} height={347} className={styles.imgMove20} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={`${styles.outcomesBox}`} style={{ background: 'linear-gradient(to right, #6b00fe, #aa00fe)' }}>
                            <h3>Music and Foley</h3>
                            <p>Compose or select background music and create sound effects to enhance the atmosphere and impact of the visuals.</p>
                            <Image src={IMG07.src} alt="Music and Foley" width={250} height={379} className={styles.imgMove20} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={`${styles.outcomesBox}`} style={{ background: 'linear-gradient(to right, #058ef8, #0e80fc)' }}>
                            <h3>Editing and Final Output</h3>
                            <p>Cut and assemble footage, ensuring smooth transitions and finalizing the project for distribution in the desired format.</p>
                            <Image src={IMG08.src} alt="Editing and Final Output" width={324} height={309} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={`${styles.outcomesBox}`} style={{ background: 'linear-gradient(to right, #ff2d4b, #f71017)' }}>
                            <h3>Rendering & Delivery</h3>
                            <p>Generate the final high-quality images or sequences from the models and animations, processing them into the final visual output.</p>
                            <Image src={IMG09.src} alt="Rendering & Delivery" width={286} height={344} className={styles.imgMove20} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OutcomesLP