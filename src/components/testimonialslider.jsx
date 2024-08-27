"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/components/testimonialslider.module.scss"
import Image from 'next/image'
import { PlayBtn, PrevButton } from '@/src/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import VideoModal from '@/src/components/videomodal'
import { useState } from 'react'


const TestimonialSlider = (props) => {
    const { slides, options, clients } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    const [modalShow, setModalShow] = useState(false);
    const [videoUrl, setvideoUrl] = useState("");

    const handleSlideClick = (videoUrl) => {
        setModalShow(true);
        setvideoUrl(videoUrl);

    };
    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.testimonialBox}>
                                <div className={styles.testimonialImg}>
                                    <Image src={item.img} alt={item.name} width={400} height={300} />
                                </div>
                                <div className={`${styles.testimonialtxt} ${clients === 'yes' ? `${styles.active}` : ''}`}>
                                    <h3>{item.name}
                                        {item.video ?
                                            <div className={styles.playBtn} onClick={() => handleSlideClick(item.video)}>
                                                <PlayBtn />
                                            </div>
                                            :
                                            ''
                                        }</h3>
                                    <p>{item.txt}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.embla__button__container}>
                <div className={styles.embla__prev} onClick={prevButtonHandler}>
                    <PrevButton direction="prev" />
                </div>
                <div className={styles.embla__next} onClick={nextButtonHandler}>
                    <PrevButton direction="next" />
                </div>
            </div>
            <VideoModal show={modalShow} iframeUrl={videoUrl}
                onHide={() => setModalShow(false)} />
        </div>

    )
}

export default TestimonialSlider