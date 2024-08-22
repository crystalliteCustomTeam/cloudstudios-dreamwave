import Image from 'next/image'
import styles from './styles/clientsreview.module.scss';
import IMG01 from "media/lp/explainer-video-animation/clients/googleReview.webp"
import IMG02 from "media/lp/explainer-video-animation/clients/clutchReview.webp"
import IMG03 from "media/lp/explainer-video-animation/clients/review.webp"
import test1 from "media/lp/explainer-video-animation/clients/test1.png"
import test2 from "media/lp/explainer-video-animation/clients/test2.png"
import test3 from "media/lp/explainer-video-animation/clients/test3.png"
import test4 from "media/lp/explainer-video-animation/clients/test4.png"
import test5 from "media/lp/explainer-video-animation/clients/test5.png"
import test6 from "media/lp/explainer-video-animation/clients/test6.png"
import test7 from "media/lp/explainer-video-animation/clients/test7.png"
import { Col, Container, Row } from 'react-bootstrap';
import TestimonilSlider from './testimonilslider';
import IMG from "media/lp/explainer-video-animation/clients/testbg.webp"

const OPTIONS = { align: 'center', loop: true, duration: 30 }
const SLIDES = [
    {
        name: 'Syvlvia David',
        badges: IMG01,
        para: `It was a fantastic experience. Their team was attentive and professional and the 3D video they created has become an enviable part of our event planning business, helping us stand out from the competition.`,
        video: "950045737",
        thumbnail: test1.src,
    },
    {
        name: 'Emily Margolis',
        badges: IMG02,
        para: `We recently just finished our first animation video with Infinity Animations and we have nothing but great things to say about this company. They were excellent in communication and responded to all our queries. Their project manager Phil Johnson kept us updated with the progress. We received a top-quality animated video within the deadline. `,
        video: "950045464",
        thumbnail: test2.src,
    },
    {
        name: 'Helen Brooks',
        badges: IMG03,
        para: `I had a 60-second corporate 2D animated video created by Infinity Animations. Their attention to detail and the quality of work was exceptional. The video effectively communicated our message. Chris and his team made the whole process quick and easy for me. `,
        video: "950045568",
        thumbnail: test3.src,
    },
    {
        name: 'Edd Lockwood',
        badges: IMG01,
        para: `Working with Infinity Animations is awesome. They understood my idea and delivered an exceptional series of animated videos for my campaign. I got favorable comments from a lot of people about the work they delivered. Appreciate their quick response time and quality work.`,
        video: "950045397",
        thumbnail: test4.src,
    },
    {
        name: 'Matt Evans',
        badges: IMG02,
        para: `Their team delivered a fantastic 2D animated video well before the deadline. Highly recommend working with them on animated videos.`,
        video: "950045706",
        thumbnail: test5.src,
    },
    {
        name: 'Mathew',
        badges: IMG03,
        para: `I needed an animated video about a mobile and Chris and his team delivered an informative and engaging video. Their team accommodated all my concerns and delivered it within the deadline.`,
        video: "950045615",
        thumbnail: test6.src,
    },
    {
        name: 'Gary Wilson',
        badges: IMG01,
        para: `I worked with Phil and his team and all I have to say is that the visuals they created were stunning. Their professionalism and expertise really made it a stress-free experience. `,
        video: "950045528",
        thumbnail: test7.src,
    },
]
const ClientsReviewLP = () => {
    return (
        <section className={styles.clientsReviewLp} style={{ backgroundImage: `url(${IMG.src})` }}>
            <Container>
                <Row>
                    <Col md={5} className='m-auto'>
                        <h2>Let’s Hear What <span>Our Clients</span> Have To Say</h2>
                    </Col>
                    <Col md={5} className='my-auto offset-lg-2'>
                        <ul className={styles.clientsImg}>
                            <li>
                                <Image src={IMG01.src} alt='googleReview' width={301} height={100} />
                            </li>
                            <li>
                                <Image src={IMG02.src} alt='clutchReview' width={287} height={100} />
                            </li>
                            <li>
                                <Image src={IMG03.src} alt='review' width={330} height={100} />
                            </li>
                        </ul>
                        <p className={styles.clientsReviews}>&quot;See what our clients say about our exceptional service!&quot;</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <TestimonilSlider slides={SLIDES} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientsReviewLP