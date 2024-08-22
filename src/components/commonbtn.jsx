"use client"
import { useState } from 'react'
import { ArrowMenu } from '@/src/app-constants';
import Link from 'next/link';
import VideoModal from '@/src/components/videomodal';

const CommonBtn = ({ data }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <div className="button" onClick={() => handleClick()}>{data ? data : "Get Started"} <ArrowMenu /></div>
            <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CommonBtn