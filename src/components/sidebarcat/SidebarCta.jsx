"use client"
import React, { useState } from 'react'
import { Col, Row } from "react-bootstrap"
import styles from "./sidebar.module.css"
import ContactForm from "@/src/components/contactform/contactfrom"
// Images
import { ClosedBtn, Phone } from "@/src/app-constants"



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
                        <div className={styles.closebutton} onClick={closeSidebar}>
                            <ClosedBtn />
                        </div>
                        <Row className="h-100">
                            <Col className="my-auto">
                                <h2>Amazing <span>Discounts</span></h2>
                                <ContactForm sidebar={true} callbtn="no"/>
                            </Col>
                        </Row>
                    </div>
                    : null
            }

        </>
    )
}

export default SidebarCTA