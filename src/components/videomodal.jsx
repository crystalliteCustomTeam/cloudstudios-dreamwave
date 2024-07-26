import { Modal } from "react-bootstrap"
import styles from "@/styles/components/videomodal.module.scss"

const VideoModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className={styles.videoPopup}>
                <video width="100%" controls autoPlay preload="none">
                    <source src={props.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </Modal>
    )
}

export default VideoModal