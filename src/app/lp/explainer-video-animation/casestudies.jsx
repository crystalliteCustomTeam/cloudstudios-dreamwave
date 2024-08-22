"use client"
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles/casestudies.module.scss';
import Thumnail from "media/lp/explainer-video-animation/thumbnail/1.png"
import Image from 'next/image';
import { PlayBtn } from '@/src/app-constants';
import VideoModal from '@/src/components/videomodal';
import CommonBtnLP from './commonbtnLP';

const data = [
    {
        title: 'Hybrid Animation',
        tabContents: [
            {
                video: "906229275",
                thumbnail: Thumnail,
            },
            {
                video: "906228502",
                thumbnail: Thumnail,
            },
            {
                video: "906229355",
                thumbnail: Thumnail,
            },
            {
                video: "907665845",
                thumbnail: Thumnail,
            },
            {
                video: "907665670",
                thumbnail: Thumnail,
            },
            {
                video: "907665545",
                thumbnail: Thumnail,
            }
        ]
    },
    {
        title: '3D Animation',
        tabContents: [
            {
                video: "906229275",
                thumbnail: Thumnail,
            },
            {
                video: "906228502",
                thumbnail: Thumnail,
            },
            {
                video: "906229355",
                thumbnail: Thumnail,
            },
            {
                video: "907665845",
                thumbnail: Thumnail,
            },
            {
                video: "907665670",
                thumbnail: Thumnail,
            },
            {
                video: "907665545",
                thumbnail: Thumnail,
            }
        ]
    },
    {
        title: '2D Animation',
        tabContents: [
            {
                video: "906229275",
                thumbnail: Thumnail,
            },
            {
                video: "906228502",
                thumbnail: Thumnail,
            },
            {
                video: "906229355",
                thumbnail: Thumnail,
            },
            {
                video: "907665845",
                thumbnail: Thumnail,
            },
            {
                video: "907665670",
                thumbnail: Thumnail,
            },
            {
                video: "907665545",
                thumbnail: Thumnail,
            }
        ]
    },
    {
        title: 'Whiteboard Animation',
        tabContents: [
            {
                video: "906229275",
                thumbnail: Thumnail,
            },
            {
                video: "906228502",
                thumbnail: Thumnail,
            },
            {
                video: "906229355",
                thumbnail: Thumnail,
            },
            {
                video: "907665845",
                thumbnail: Thumnail,
            },
            {
                video: "907665670",
                thumbnail: Thumnail,
            },
            {
                video: "907665545",
                thumbnail: Thumnail,
            }
        ],
    }, {
        title: 'Motion Graphics',
        tabContents: [
            {
                video: "906229275",
                thumbnail: Thumnail,
            },
            {
                video: "906228502",
                thumbnail: Thumnail,
            },
            {
                video: "906229355",
                thumbnail: Thumnail,
            },
            {
                video: "907665845",
                thumbnail: Thumnail,
            },
            {
                video: "907665670",
                thumbnail: Thumnail,
            },
            {
                video: "907665545",
                thumbnail: Thumnail,
            }
        ],
    },
];

const CaseStudiesLP = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [videoID, setVideoID] = useState("");


    const handleTabClick = (index) => {
        setActiveTab(index);
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
                        <h2><span>Animated Videos</span> That Deliver Results</h2>
                        <p>
                            Unlock your brand’s potential with our video animation services! Engage your audience with dynamic animations that convert viewers into loyal customers. Let’s make your idea come alive!
                        </p>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.tabTitle}>
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                        <div className={styles.tabContent}>
                            {data[activeTab] && (
                                <div className={styles.tabVideo}>
                                    {data[activeTab].tabContents.map((content, index) => (
                                        <div
                                            key={index}
                                            className={styles.videoThumbnail}
                                            onClick={() => handlePlayClick(content.video)}
                                        >
                                            <Image
                                                src={content.thumbnail}
                                                alt={`Thumbnail ${index + 1}`}
                                                className={styles.thumbnail}
                                            />
                                            <div className={styles.playButton}>
                                                <PlayBtn />
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