"use client"
import { PlayBtn } from "@/src/app-constants";
import styles from "@/styles/components/casestudies.module.scss";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import VideoModal from "@/src/components/videomodal";

const VIMEO_ACCESS_TOKEN = "efbf8d8cbada18a5bc7572594e303e5c";

// Fetches a specific page of videos
const fetchVimeoVideos = async (page = 1, perPage = 9) => {
    try {
        const response = await fetch(`https://api.vimeo.com/me/videos?fields=pictures,uri,created_time&per_page=${perPage}&page=${page}`, {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
            },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching Vimeo videos:", error);
        return [];
    }
};

const CaseStudies = () => {
    const [modalShow, setModalShow] = useState(false);
    const [videoID, setVideoID] = useState("");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMoreVideos, setHasMoreVideos] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                const newVideos = await fetchVimeoVideos(page);
                if (newVideos.length < 9) {
                    setHasMoreVideos(false); // No more videos to load
                }
                // Only add new videos if they are not already in the state
                setVideos((prevVideos) => {
                    const newVideoIds = newVideos.map(video => video.uri.split('/').pop());
                    const existingVideoIds = new Set(prevVideos.map(video => video.uri.split('/').pop()));
                    const filteredNewVideos = newVideos.filter(video => !existingVideoIds.has(video.uri.split('/').pop()));
                    return [...prevVideos, ...filteredNewVideos];
                });
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [page]);

    const handlePlayClick = (id) => {
        setModalShow(true);
        setVideoID(id);
    };

    const handleLoadMore = () => {
        if (!loading && hasMoreVideos) {
            setPage((prevPage) => prevPage + 1);
        }
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
                    <div className="text-center mt-4">
                        {loading ? (
                            <div className="button" disabled>
                                <Spinner as="span" animation="border" size="sm" />
                                <span>Loading...</span>
                            </div>
                        ) : hasMoreVideos ? (
                            <div className="button" onClick={handleLoadMore}>
                                Load More Videos
                            </div>
                        ) : (
                            <p>No more videos to load.</p>
                        )}
                    </div>
                </Container>
            </section>
            <VideoModal show={modalShow} iframeUrl={videoID} onHide={() => setModalShow(false)} />
        </>
    );
};

export default CaseStudies;
