import { Col, Modal, Row } from "react-bootstrap"
import styles from "@/styles/components/videomodal.module.scss"
import ContactForm from "@/src/components/contactform/contactfrom"
import Animation from "@/src/components/animation"
import { ClosedBtn } from "@/src/app-constants"

const VideoModal = (props) => {
    const { videoUrl, iframeUrl, onHide } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {videoUrl ? (
                <div className={styles.videoPopup}>
                    <video width="100%" controls autoPlay preload="none">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                </div>
            ) : iframeUrl ? (
                <div className={styles.iframePopup}>
                    <iframe src={`https://player.vimeo.com/video/${iframeUrl}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                    <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                </div>
            ) : (
                <div className={styles.contactPopup}>
                    <Row className="h-100">
                        <Col lg={6} md={6} className="my-auto">
                            <h2>Amazing <span>Discounts</span></h2>
                            <h5>On Video Animation Services</h5>
                            <ContactForm callbtn="no" />
                        </Col>
                        <Col lg={6} md={6} className={`${styles.animationClass} my-auto`}>
                            <Animation />
                        </Col>
                    </Row>
                    <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                </div>
            )
            }

        </Modal >
    )
}

export default VideoModal