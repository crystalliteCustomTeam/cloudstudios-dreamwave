import styles from "@/styles/home/services.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ServicesSlider from "@/src/components/servicesslider"
import Service01 from "media/home/services/2D-Animation.webp"
import Service02 from "media/home/services/3D-Animation.webp"
import Service03 from "media/home/services/Motion-Animation.webp"


const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        name: "2D Animation",
        txt: "From product demos to teasers, promos, and commercials, 2D animation is a stunning, versatile medium.",
        img: Service01.src,
        link: "#",
    },
    {
        name: "3D Animation",
        txt: "Do your visuals require depth to immerse your audience or explain your product? A 3D video is exactly what you need.",
        img: Service02.src,
        link: "#",
    },
    {
        name: "Motion Animation",
        txt: "Immerse your audience in the authenticity of real people, genuine emotions, and tangible settings.",
        img: Service03.src,
        link: "#",
    }, {
        name: "2D Animation",
        txt: "From product demos to teasers, promos, and commercials, 2D animation is a stunning, versatile medium.",
        img: Service01.src,
        link: "#",
    },
    {
        name: "3D Animation",
        txt: "Do your visuals require depth to immerse your audience or explain your product? A 3D video is exactly what you need.",
        img: Service02.src,
        link: "#",
    },
    {
        name: "Motion Animation",
        txt: "Immerse your audience in the authenticity of real people, genuine emotions, and tangible settings.",
        img: Service03.src,
        link: "#",
    },
]

const Services = () => {
    return (
        <section className={`${styles.servicesSec} p-100`}>
            <Container>
                <Row>
                    <Col xxl={12}>
                        <div className={styles.servicesBg} >
                            <h2 className="text-center">Our Services</h2>
                            <ServicesSlider slides={SLIDES} options={OPTIONS} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services