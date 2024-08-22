"use client"
import { ArrowBlackIcons, PlayBtn } from '@/src/app-constants';
import styles from "./styles/testimonialslider.module.scss"
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Col, Row } from 'react-bootstrap';
import Fade from 'embla-carousel-fade';
import VideoModal from '@/src/components/videomodal';
import { useState } from 'react';

const TestimonilSlider = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [Fade()])

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    const [modalShow, setModalShow] = useState(false);
    const [videoID, setVideoID] = useState("");



    const handlePlayClick = (id) => {
        setModalShow(true);
        setVideoID(id);
    };

    return (
        <section className={styles.embla} >
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <Row>
                                <Col md={6} className='my-auto'>
                                    <div className={styles.imagesBox}>
                                        <div className={styles.imgContainer}>
                                            <Image src={item.thumbnail} alt="thumbnail" width={533} height={300} />
                                        </div>
                                        <div className={styles.playButton} onClick={() => handlePlayClick(item.video)}>
                                            <PlayBtn />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='my-auto'>
                                    <div className={styles.contentBox}>
                                        <div className={styles.badgesBox}>
                                            <Image src={item.badges} alt="badges" width={144} height={50} />
                                        </div>
                                        <div className={styles.txtBox}>
                                            {item.para}
                                        </div>
                                        <div className={styles.titles}>
                                            {item.name}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.embla__button__container}>
                <div className={styles.embla__prev} onClick={prevButtonHandler}>
                    <ArrowBlackIcons direction="prev" />
                </div>
                <div className={styles.embla__next} onClick={nextButtonHandler}>
                    <ArrowBlackIcons direction="next" />
                </div>
            </div>
            <VideoModal show={modalShow} iframeUrl={videoID} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default TestimonilSlider