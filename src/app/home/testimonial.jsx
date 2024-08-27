import TestimonialSlider from "@/src/components/testimonialslider"
import styles from "@/styles/home/testimonial.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerBg from "media/home/testimonial/logo.webp"
import IMG01 from "media/home/testimonial/test1.webp"
import IMG02 from "media/home/testimonial/test2.webp"
import IMG03 from "media/home/testimonial/test3.webp"
import IMG04 from "media/home/testimonial/test4.webp"
import IMG05 from "media/home/testimonial/test5.webp"
import IMG06 from "media/home/testimonial/test6.webp"

const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        name: "Mike",
        txt: "Leveraging Cloud Studios' animation service was the best decision ever. They turned our architectural concept into a mind-blowing 3D walkthrough! Their visualization skills and animated services are out of this world.",
        img: IMG01.src,
        video: "https://player.vimeo.com/video/1002689936?h=889006b16b&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    },
    {
        name: "Thomas Wright",
        txt: "OMG! The cel animation the studio created for our indie film was pure magic! The animation agency somehow captured the nostalgia of old-school cartoons while adding a modern twist.",
        img: IMG02.src,
        video: "https://player.vimeo.com/video/1002690094?h=110b768753&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    },
    {
        name: "Rusell J. Peters ",
        txt: "Holy hybrid animation, Superman! Cloud Studios is the best video marketing agency. It was an eye-popping visual feast that had our fans buzzing! They're the real superheroes of animation services!",
        img: IMG03.src,
    }, {
        name: "Lisa Kevins",
        txt: "The graphics are so smooth and realistic that players feel like they're actually behind the wheel. These folks have some serious horsepower in their rendering engines!",
        img: IMG04.src,
    }
    , {
        name: "Lisa Kevins",
        txt: "The graphics are so smooth and realistic that players feel like they're actually behind the wheel. These folks have some serious horsepower in their rendering engines!",
        img: IMG05.src,
    }
    , {
        name: "Lisa Kevins",
        txt: "The graphics are so smooth and realistic that players feel like they're actually behind the wheel. These folks have some serious horsepower in their rendering engines!",
        img: IMG06.src,
    }
]

const Testimonial = ({ clients, slides, tit }) => {
    return (
        <section className={`${styles.testimonialSec} p-100`} style={{ backgroundImage: `url(${BannerBg.src})` }}>
            <Container>
                <Row>
                    <Col xxl={7} xl={7} lg={6} md={8} className="m-auto text-center">
                        <h3 className="spacing">TESTIMONIALS </h3>
                        <h2>Find Out Why Everyone’s Talking About Our Amazing Work!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12}>
                        <TestimonialSlider slides={SLIDES} options={OPTIONS} clients={clients} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial