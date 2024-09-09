"use client"
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles/casestudies.module.scss';
import Thumb01 from "media/lp/explainer-video-animation/thumbnail/2d/1.jpg"
import Thumb02 from "media/lp/explainer-video-animation/thumbnail/2d/2.jpg"
import Thumb03 from "media/lp/explainer-video-animation/thumbnail/2d/3.jpg"
import Thumb04 from "media/lp/explainer-video-animation/thumbnail/2d/4.jpg"
import Thumb05 from "media/lp/explainer-video-animation/thumbnail/2d/5.jpg"
import Thumb06 from "media/lp/explainer-video-animation/thumbnail/2d/6.jpg"
import WB01 from "media/lp/explainer-video-animation/thumbnail/whiteboard/1.jpg"
import WB02 from "media/lp/explainer-video-animation/thumbnail/whiteboard/2.jpg"
import WB03 from "media/lp/explainer-video-animation/thumbnail/whiteboard/3.jpg"
import WB04 from "media/lp/explainer-video-animation/thumbnail/whiteboard/4.jpg"
import WB05 from "media/lp/explainer-video-animation/thumbnail/whiteboard/5.jpg"
import WB06 from "media/lp/explainer-video-animation/thumbnail/whiteboard/6.jpg"
import HA01 from "media/lp/explainer-video-animation/thumbnail/hybrid/1.jpg"
import HA02 from "media/lp/explainer-video-animation/thumbnail/hybrid/2.jpg"
import HA03 from "media/lp/explainer-video-animation/thumbnail/hybrid/3.jpg"
import HA04 from "media/lp/explainer-video-animation/thumbnail/hybrid/4.jpg"
import HA05 from "media/lp/explainer-video-animation/thumbnail/hybrid/5.jpg"
import HA06 from "media/lp/explainer-video-animation/thumbnail/hybrid/6.jpg"
import THREED01 from "media/lp/explainer-video-animation/thumbnail/3d/1.jpg"
import THREED02 from "media/lp/explainer-video-animation/thumbnail/3d/2.jpg"
import THREED03 from "media/lp/explainer-video-animation/thumbnail/3d/3.jpg"
import Thumnail from "media/lp/explainer-video-animation/thumbnail/2d/6.jpg"
import Image from 'next/image';
import { PlayBtn } from '@/src/app-constants';
import VideoModal from '@/src/components/videomodal';
import CommonBtnLP from './common/commonbtnlp';

const data = [
    {
        title: 'Hybrid Animation',
        tabContents: [
            {
                video: "982280890",
                thumbnail: HA01,
            },
            {
                video: "982279422",
                thumbnail: HA02,
            },
            {
                video: "982276415",
                thumbnail: HA03,
            },
            {
                video: "982270145",
                thumbnail: HA04,
            },
            {
                video: "982270806",
                thumbnail: HA05,
            },
            {
                video: "982268237",
                thumbnail: HA06,
            }
        ]
    },
    {
        title: '3D Animation',
        tabContents: [
            {
                video: "978620838",
                thumbnail: THREED01,
            },
            {
                video: "978621261",
                thumbnail: THREED02,
            },
            {
                video: "978622370",
                thumbnail: THREED03,
            }
        ]
    },
    {
        title: '2D Animation',
        tabContents: [
            {
                video: "989803709",
                thumbnail: Thumb01,
            },
            {
                video: "989802611",
                thumbnail: Thumb02,
            },
            {
                video: "989801631",
                thumbnail: Thumb03,
            },
            {
                video: "989800427",
                thumbnail: Thumb04,
            },
            {
                video: "989797474",
                thumbnail: Thumb05,
            },
            {
                video: "989796548",
                thumbnail: Thumb06,
            }
        ]
    },
    {
        title: 'Whiteboard Animation',
        tabContents: [
            {
                video: "989781087",
                thumbnail: WB01,
            },
            {
                video: "989780082",
                thumbnail: WB02,
            },
            {
                video: "989777701",
                thumbnail: WB03,
            },
            {
                video: "989757235",
                thumbnail: WB04,
            },
            {
                video: "989755999",
                thumbnail: WB05,
            },
            {
                video: "989754690",
                thumbnail: WB06,
            }
        ],
    },
    {
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