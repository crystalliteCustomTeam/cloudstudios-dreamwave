"use client"
import BannerLogos from "@/src/components/bannerlogos";
import Services from "@/src/app/home/services";
import AboutSec from "@/src/app/home/aboutsec";
import ExperienceSec from "@/src/app/home/experience";
import CaseStudy from "@/src/app/home/casestudy";
import WorkSec from "@/src/app/home/work";
import Achievement from "@/src/app/home/achievement";
import Testimonial from "@/src/app/home/testimonial";
import Contact from "@/src/app/home/contact";
import MainBanner from "@/src/components/mainbanner";
import SidebarCTA from "../components/sidebarcat/SidebarCta";
import { useEffect, useState } from "react";





const banner = {
  rating: "The New Frontier in Animation.",
  star: "yes",
  title: "Revolutionize Your Digital Content with Cloud Studios Inc.",
  txt: (
    <>
      <p> <strong>Engage Your Audiences & Boost Your Reach Today!</strong></p>
      <p>We engineer dynamic video content, lead advancements in cutting-edge animation technology, and create immersive digital worlds to push your brand into new virtual frontiers.</p>
    </>
  ),
  video: "https://player.vimeo.com/video/1001680637?h=44a469d25a&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
  link: "#"

}





export default function Home() {
  const [showDesktopComponents, setShowDesktopComponents] = useState(true);
  const [showMobileComponents, setShowMobileComponents] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show desktop components after 1 second
    const desktopTimer = setTimeout(() => {
      setShowDesktopComponents(true);
    }, 500);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(desktopTimer);
    };
  }, []);

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true);
      // Remove event listeners after mobile components are shown
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };

    // Add event listeners for touch and scroll events
    window.addEventListener("scroll", handleTouchOrScroll);
    window.addEventListener("touchstart", handleTouchOrScroll);

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };
  }, []);

  return (
    <>
      {
        isMobile ? (
          showMobileComponents && (
            <>
              <MainBanner data={banner} />
              <BannerLogos />
              <Services />
              <AboutSec />
              <ExperienceSec />
              <CaseStudy />
              <WorkSec />
              <Achievement />
              <Testimonial clients="yes" />
              <SidebarCTA />
              <Contact />
            </>
          )
        ) : (
          showDesktopComponents && (
            <>
              <MainBanner data={banner} />
              <BannerLogos />
              <Services />
              <AboutSec />
              <ExperienceSec />
              <CaseStudy />
              <WorkSec />
              <Achievement />
              <Testimonial clients="yes" />
              <Contact />
            </>
          )
        )
      }
    </>
  );
}
