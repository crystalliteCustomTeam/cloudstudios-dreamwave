import styles from "@/styles/components/video.module.scss";

const VideoPlayer = ({ video, bannerVideo }) => {
    return (
        <>
            {bannerVideo ? (
                <div className={styles.bannerVideo}>
                    <video width="100%" controls={false} autoPlay loop muted preload="none">
                        <source src={bannerVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
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
