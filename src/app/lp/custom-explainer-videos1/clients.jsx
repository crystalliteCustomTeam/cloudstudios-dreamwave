"use client"
import Image from 'next/image'
import styles from "@/styles/lp/custom-explainer-videos/clients.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';
import IMG01 from "media/lp/custom-explainer-videos/clients/client-img-new-1.webp";
import IMG02 from "media/lp/custom-explainer-videos/clients/client-img-new-2.webp";
import IMG03 from "media/lp/custom-explainer-videos/clients/client-img-new-3.webp";
import IMG04 from "media/lp/custom-explainer-videos/clients/client-img-new-4.webp";
import IMG05 from "media/lp/custom-explainer-videos/clients/client-img-new-5.webp";
import IMG06 from "media/lp/custom-explainer-videos/clients/client-img-new-6.webp";



const logos = [
    { src: IMG01.src, alt: 'Client 1' },
    { src: IMG02.src, alt: 'Client 2' },
    { src: IMG03.src, alt: 'Client 3' },
    { src: IMG04.src, alt: 'Client 4' },
    { src: IMG05.src, alt: 'Client 5' },
    { src: IMG06.src, alt: 'Client 6' },
];


const ClientSlider = () => {
    const [emblaRef] = useEmblaCarousel(
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]
    );
    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {logos.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <Image src={item.src} alt={item.alt} width={209} height={67} />
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default ClientSlider