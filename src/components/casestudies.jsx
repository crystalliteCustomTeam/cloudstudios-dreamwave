"use client"
import { PlayBtn } from "@/src/app-constants";
import styles from "@/styles/components/casestudies.module.scss";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import VideoModal from "@/src/components/videomodal";

const VIMEO_ACCESS_TOKEN = "efbf8d8cbada18a5bc7572594e303e5c";

const TAGS = [
    "3D-Animation",
    "2D-Animation",
    "explainer-videos",
    "infographics-animation",
    "logo-animation",
    "promotional-animation",
    "CGI-VFX",
    "motion-animation",
    "hybrid-animation",
    "architectural-visualization",
    "video-editing",
    "whiteboard-animation",
];

const fetchVimeoVideosByTag = async (tag) => {
    try {
        const response = await fetch(`https://api.vimeo.com/me/videos?query=${tag}&fields=pictures,uri,created_time,tags`, {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
            },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Error fetching Vimeo videos for tag ${tag}:`, error);
        return [];
    }
};

const CaseStudies = () => {
    const [modalShow, setModalShow] = useState(false);
    const [videoID, setVideoID] = useState("");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                let allVideos = [];

                // Fetch videos for each tag and merge results
                for (const tag of TAGS) {
                    const videosByTag = await fetchVimeoVideosByTag(tag);
                    allVideos = [...allVideos, ...videosByTag];
                }

                // Remove duplicates by video ID
                const uniqueVideos = allVideos.filter((video, index, self) =>
                    index === self.findIndex((v) => (
                        v.uri === video.uri
                    ))
                );

                setVideos(uniqueVideos);
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const handlePlayClick = (id) => {
        setModalShow(true);
        setVideoID(id);
    };

    return (
        <>
            <section className={`${styles.casestudySec} p-100`}>
                <Container className="h-100">
                    <Row className="pt-4">
                        {videos.map((video, index) => (
                            <Col xxl={4} lg={4} md={6} key={index}>
                                <div
                                    className={`${styles.videoBox} ${videoID === video.uri.split('/').pop() ? styles.active : ''}`}
                                    style={{ backgroundImage: `url(${video.pictures.sizes[3].link})` }}
                                >
                                    <div className={styles.playBtn} onClick={() => handlePlayClick(video.uri.split('/').pop())}>
                                        <PlayBtn />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {loading && (
                        <div className="text-center mt-4">
                            <div className="button" disabled>
                                <Spinner as="span" animation="border" size="sm" />
                                <span>Loading...</span>
                            </div>
                        </div>
                    )}
                </Container>
            </section>
            <VideoModal show={modalShow} iframeUrl={videoID} onHide={() => setModalShow(false)} />
        </>
    );
};

export default CaseStudies;