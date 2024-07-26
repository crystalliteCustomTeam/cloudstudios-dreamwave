import Image from "next/image"
import Marquee from "react-fast-marquee";

const ScrollingSlider = ({ data, dir }) => {
    return (
        <Marquee pauseOnHover={true} direction={dir} >
            <Image src={data} alt="Cloud studios" width={1340} height={58} />
            <Image src={data} alt="Cloud studios" width={1340} height={58} />
        </Marquee>
    )
}

export default ScrollingSlider
