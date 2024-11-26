"use client"
import { useCallback } from "react"
import { DotButton, useDotButton } from "./embla-carousel-dots"
import styles from "./embla-carousel.module.scss"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Quote from "media/lp/explainer-video-animation2/quote.png"
import Avater1 from "media/lp/explainer-video-animation2/testi-img1.png"
import Avater2 from "media/lp/explainer-video-animation2/testi-img2.png"
import Avater3 from "media/lp/explainer-video-animation2/testi-img3.png"
import Star from "media/lp/explainer-video-animation2/star.png"
import Image from "next/image"
const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {[
            [
              "From start to finish, the process was incredibly easy. It was a pleasure to work with the Explain Art Videos squad.",
              Avater1,
              "Jennifer Aswat",
            ],
            [
              "The story of the business relationship started with a 30 second video in 2019, now Explain Art Video team has produced 27 videos for our multiple brands for us. Glad to get a reliable company in the US",
              Avater2,
              "David Manks",
            ],
            [
              "The whole team of Explain Art Video was extremely responsive and helpful. The videos were produced on time. The creatives were excellent and I personally liked the concept. Highly recommended. ",
              Avater3,
              "Jason Gawkwad",
            ],
          ].map(([desc, avater, name], index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.testCard}>
                <Image src={Quote} alt="icons" width={70} height={75} />
                <p>{desc}</p>
                <div className={styles.id}>
                  <Image src={avater} alt="avaters" />
                  <div className={styles.content}>
                    <span className="d-block">{name}</span>
                    {[Star, Star, Star, Star, Star].map((e, i) => (
                      <Image key={i} src={e} alt="icons" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__controls}>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} ${
                index === selectedIndex ? styles.embla__dot__selected : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
