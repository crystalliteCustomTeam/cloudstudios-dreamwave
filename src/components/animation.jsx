"use client"
// import { Lottie, useLottie } from 'lottie-react';
// import animationData from 'media/animations/animation.json';
import { FavIcon2 } from "@/src/app-constants"

const Animation = ({ footer }) => {
    // const options = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    // };

    // const { View, play, stop, pause } = useLottie(options);

    return (
        // <div>
        //     {View}
        // </div>
        <div className={`contactImg ${footer ? 'footerSVG' : ''}`}>
            <FavIcon2 />
        </div>
    );
};

export default Animation;