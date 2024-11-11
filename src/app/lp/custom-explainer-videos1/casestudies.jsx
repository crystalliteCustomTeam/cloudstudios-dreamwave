"use client";
import { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { PlayBtn } from '@/src/app-constants';
import VideoModal from '@/src/components/videomodal';
import CommonBtnLP from '@/src/app/lp/custom-explainer-videos1/commonbtnlp';
import styles from '@/styles/lp/custom-explainer-videos/casestudies.module.scss';


const tabs = [
    { title: 'Hybrid Animation', tag: 'cloudstudiosHB' },
    { title: '3D Animation', tag: 'cloudstudios3D' },
    { title: '2D Animation', tag: 'cloudstudios2D' },
    { title: 'Whiteboard Animation', tag: 'cloudstudiosWB' },
    { title: 'Motion Graphics', tag: 'cloudstudiosMG' },
];


const VIMEO_ACCESS_TOKEN = 'efbf8d8cbada18a5bc7572594e303e5c';


const fetchVideos = async (tag) => {
    try {
        const response = await fetch(`https://api.vimeo.com/me/videos?query=${tag}&fields=pictures,uri,created_time,tags&per_page=6`, {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
            }
        });

        const data = await response.json();
        return data.data
    } catch (error) {
        console.error("Error fetching videos:", error);
        return [];
    }
};

const CaseStudiesLP = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].tag);
    const [modalShow, setModalShow] = useState(false);
    const [videoID, setVideoID] = useState("");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTabVideos = async () => {
            setLoading(true);
            const videoData = await fetchVideos(activeTab);
            setVideos(videoData);
            setLoading(false);
        };

        fetchTabVideos();
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab.tag);
    };

    const handlePlayClick = (id) => {
        setModalShow(true);
        setVideoID(id);
    };

    return (
        <section className={styles.casestudiesLp}>
            <Container>
                <Row>
                    <Col lg={10} className='m-auto'>
                        <h2>Our <span>Amazing</span> Portfolio</h2>
                        <p>Feel free to take a look around and place your orders with complete confidence.</p>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.tabTitle}>
                            {tabs.map((tab) => (
                                <div
                                    key={tab.tag}
                                    className={`${styles.tab} ${activeTab === tab.tag ? styles.active : ''}`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.title}
                                </div>
                            ))}
                        </div>
                        <div className={styles.tabContent}>
                            {loading ? (
                                <div className="text-center">
                                    <Spinner animation="border" />
                                    <p>Loading...</p>
                                </div>
                            ) : (
                                <div className={styles.tabVideo}>
                                    {videos.map((video, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.videoThumbnail} ${videoID === video.uri.split('/').pop() ? styles.active : ''}`}
                                            style={{ backgroundImage: `url(${video.pictures.sizes[3].link})` }}
                                            onClick={() => handlePlayClick(video.uri.split('/').pop())}
                                        >
                                            <div className={styles.thumbnail}>
                                                <div className={styles.playButton}>
                                                    <PlayBtn />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className={styles.ctaButton}>
                            <CommonBtnLP data="Make an Animation" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <VideoModal show={modalShow} iframeUrl={videoID} onHide={() => setModalShow(false)} />
        </section>
    );
};

export default CaseStudiesLP;

