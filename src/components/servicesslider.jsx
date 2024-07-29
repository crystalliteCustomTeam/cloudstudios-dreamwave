"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/components/servicesslider.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowMenu, PrevButton } from '@/src/app-constants'
import Autoplay from 'embla-carousel-autoplay'


const ServicesSlider = (props) => {
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

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.servicesBox}>
                                <div className={styles.servicesImg}>
                                    <Image src={item.img} alt={item.name} width={400} height={300} />
                                </div>
                                <div className={styles.servicestxt}>
                                    <h3>{item.name}</h3>
                                    <p>{item.txt}</p>
                                    <Link href={item.link} className="button">Get Started <ArrowMenu /> </Link>
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

export default ServicesSlider