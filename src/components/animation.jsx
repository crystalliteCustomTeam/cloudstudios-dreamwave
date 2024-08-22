"use client"
import { Lottie, useLottie } from 'lottie-react';
import animationData from 'media/animations/animation.json';

const Animation = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    const { View, play, stop, pause } = useLottie(options);

    return (
        <div>
            {View}
        </div>
    );
};

export default Animation;