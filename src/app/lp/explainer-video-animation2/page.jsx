import {
  CTASec,
  DigitalBranding,
  Faqs,
  Footer,
  Header,
  Hero,
  OurClients,
  Packages,
  Projects,
  Reviews,
  Statistics,
  TrustedLogos,
  Types,
  WeWork,
} from "@/src/components/lp/explainer-video-animation2"

const ExplainerVideoAnimation2 = () => {
  return (
    <>
      <Header />
      <Hero />
      <TrustedLogos />
      <DigitalBranding />
      <Projects />
      <CTASec />
      <Types />
      <Packages />
      <Statistics />
      <WeWork />
      <Faqs />
      <CTASec
        title="Start Displaying Your Brand with Amazing Animated Videos Spread Profound Message and Scale Up Your Business"
        desc="The usage of animations has increased multifold in business, and make the most of it NOW!"
        call={false}
      />
      <Reviews />
      <OurClients />
      <Footer/>
    </>
  )
}

export default ExplainerVideoAnimation2
