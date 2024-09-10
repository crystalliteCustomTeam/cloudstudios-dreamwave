"use client"
import React, { useState } from 'react'
import { Col, Modal, Row } from "react-bootstrap"
import styles from "./sidebar.module.css"
import ContactForm from "@/src/components/contactform/contactfrom"
// Images
import { ClosedBtn, Phone } from "@/src/app-constants"
import Animation from "@/src/components/animation"


const SidebarCTA = () => {

    // Active 
    const [isActive, setIsActive] = useState(false);

    const toggleActiveState = () => {
        setIsActive(true);
        console.log("open btn")
    };

    const closeSidebar = () => {
        setIsActive(!isActive);
        console.log("close btn")


    };


    return (
        <>
            <div
                className={`font-sans ${styles.sidebarSec} ${isActive ? styles.hidden : ''}`}

            >
                <div className={styles.getFrom} onClick={toggleActiveState}>
                    <span className="text-light">
                        Get A Quote
                    </span>
                </div>
                <div className={styles.phoneNumber} >
                    <a href='tel:1-833-666-6684' >
                        <Phone />
                    </a>
                </div>

            </div>
            {
                isActive === true ?

                    <div className={`${styles.sidebarFrom} ${styles.active} `}>
                        <Modal
                            show={isActive}
                            onClick={closeSidebar}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <div className={styles.contactPopup}>
                                <Row className="h-100">
                                    <Col lg={6} md={6} className="my-auto">
                                        <h2>Amazing <span>Discounts</span></h2>
                                        <h5>On Video Animation Services</h5>
                                        <ContactForm callbtn="no" />
                                    </Col>
                                    <Col lg={6} md={6} className={`${styles.animationClass} my-auto`}>
                                        <Animation />
                                    </Col>
                                </Row>
                                <div className={styles.closedBtn} onClick={closeSidebar}><ClosedBtn /></div>
                            </div>
                        </Modal>
                    </div>
                    : null
            }

        </>
    )
}

export default SidebarCTA