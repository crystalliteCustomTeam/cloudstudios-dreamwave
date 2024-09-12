"use client"
import BannerLogos from "@/src/components/bannerlogos";
import Services from "./services";
import AboutSec from "@/src/app/home/aboutsec";
import ExperienceSec from "@/src/app/home/experience";
import CaseStudy from "@/src/app/home/casestudy";
import WorkSec from "@/src/app/home/work";
import Achievement from "./achievement";
import Testimonial from "@/src/app/home/testimonial";
import Contact from "@/src/app/home/contact";
import MainBanner from "./mainbanner";
import PriceBox from "./pricebox";
import CaseStudies from "./casestudies";

export default function Home() {

  return (
    <>
      <MainBanner />
      <BannerLogos />
      <Services />
      <CaseStudies />
      <PriceBox />
      <WorkSec />
      <Achievement />
      <Testimonial clients="yes" />
      <Contact />

    </>
  );
}