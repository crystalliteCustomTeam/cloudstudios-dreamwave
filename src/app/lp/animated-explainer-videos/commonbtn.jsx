"use client"
import { useState } from 'react'
import { ArrowMenu } from '@/src/app-constants';
import Link from 'next/link';
import VideoModal from '@/src/components/videomodal';

const CommonBtn = ({ btnStyle, data, btnicon }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <div className={btnStyle ? btnStyle : "button"} onClick={() => handleClick()}>{data ? data : "Get Started"} {btnicon == ! true ? null : <ArrowMenu />}</div>
            <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CommonBtn