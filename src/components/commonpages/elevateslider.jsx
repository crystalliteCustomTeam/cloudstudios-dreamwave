"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/components/commonpages/elevateslider.module.scss"
import { ArrowIcons } from '@/src/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import { Container } from 'react-bootstrap'

const ElevateSlider = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay(), ClassNames()]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.elevateBox}>
                                <div className={styles.elevateImg}>
                                    {item.icon}
                                </div>
                                <div className={styles.elevatetxt}>
                                    <h5>{item.name}</h5>
                                    <div className={styles.elevatePara}>
                                        {item.txt}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Container>
                <div className={styles.embla__button__container}>
                    <div className={styles.embla__prev} onClick={prevButtonHandler}>
                        <ArrowIcons direction="prev" />
                    </div>
                    <div className={styles.embla__next} onClick={nextButtonHandler}>
                        <ArrowIcons direction="next" />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default ElevateSlider