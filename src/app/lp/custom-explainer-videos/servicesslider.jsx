"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/components/servicesslider.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowMenu, PlayBtn, PrevButton } from '@/src/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import CommonBtn from './commonbtn'

const ServicesSlider = (props) => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the active slide index
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };

    const handlePlay = (index) => {
        setActiveIndex(index); // Set the active index when a slide is clicked
    };

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div
                            className={styles.embla__slide}
                            key={index}
                        >
                            <div className={styles.servicesBox}>
                                <div className={styles.servicesImg} onClick={() => handlePlay(index)} // Pass index to handlePlay 
                                >
                                    {item.video && activeIndex === index ? ( // Conditionally render based on the active index
                                        <iframe
                                            src={item.video}
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                            title="Vimeo Video"
                                            className={styles.iframe}
                                        ></iframe>
                                    ) : (
                                        <>
                                            <Image src={item.img} alt={item.name} width={400} height={300} />
                                            <div className={styles.playBtn} >
                                                <PlayBtn />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className={styles.servicestxt} >
                                    <h3>{item.name}</h3>
                                    <p>{item.txt}</p>
                                    <CommonBtn btnStyle="button" iconSize={16} btnicon={false} data={<>
                                        Get Started <ArrowMenu />
                                    </>} />
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
        </div>
    )
}

export default ServicesSlider;
