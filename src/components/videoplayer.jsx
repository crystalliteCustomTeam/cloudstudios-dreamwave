import styles from "@/styles/components/video.module.scss";

const VideoPlayer = ({ video, bannerVideo, iframeUrl }) => {
    return (
        <>
            {bannerVideo ? (
                <div className={styles.bannerVideo}>
                    <video width="100%" controls={false} autoPlay loop muted preload="none">
                        <source src={bannerVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : iframeUrl ? (
                <div className={styles.videoContainer}>
                    <iframe
                        src={iframeUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Vimeo Video"
                        className={styles.iframe}
                    ></iframe>
                </div>
            ) : (
                <div className={styles.bannerIframe}>
                    <iframe
                        src={video}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </>
    );
};

export default VideoPlayer;
