"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowBlackIcons } from '@/src/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import Link from 'next/link'
import CommonBtnLP from './common/commonbtnlp'

const SliderServices = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [ClassNames()])

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="servicesBox" style={{ backgroundImage: `url(${item.img})` }}>
                                <div className="servicestxt">
                                    <h6>{item.title}</h6>
                                    <div className="servicesPara">
                                        {item.txt}
                                    </div>
                                    <CommonBtnLP data="Make an Animation" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__button__container">
                <div className="embla__prev" onClick={prevButtonHandler}>
                    <ArrowBlackIcons direction="prev" />
                </div>
                <div className="embla__next" onClick={nextButtonHandler}>
                    <ArrowBlackIcons direction="next" />
                </div>
            </div>
        </section>
    )
}

export default SliderServices