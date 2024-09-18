"use client"
import { useState } from 'react'
import VideoModal from '@/src/components/videomodal';

const CommonBtnLP = ({ data }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <div
                className="buttonLP"
                onClick={() => handleClick()}
            >
                {data ? data : "Get Started"}
            </div>

            <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CommonBtnLP