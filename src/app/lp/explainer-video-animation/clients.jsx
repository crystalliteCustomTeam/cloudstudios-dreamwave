import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import IMG from "media/lp/explainer-video-animation/client-serve.webp"
import styles from "./styles/clients.module.scss"


const ClientsLP = () => {
    return (
        <section className={styles.casestudiesLp}>
            <Container>
                <Row>
                    <Col lg={12} className='m-auto'>
                        <h2><span>Clients</span> We Serve</h2>
                        <Image src={IMG.src} alt='client-serve' width={1216} height={161} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientsLP