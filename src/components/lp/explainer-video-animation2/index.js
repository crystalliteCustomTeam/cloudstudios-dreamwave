// Next
import dynamic from "next/dynamic"

// Dynamic Components
const Header = dynamic(() => import("./Header/header"))
const Hero = dynamic(() => import("./Hero/hero"))
import CTA from "./CTA/CTA"
const ContactForm = dynamic(() => import("./Contact-Form/contact-form"))
const TrustedLogos = dynamic(() => import("./Trusted-Logos/trusted-logos"))
const DigitalBranding = dynamic(() =>
  import("./Digital-Branding/digital-branding")
)
const Projects = dynamic(() => import("./Projects/projects"))
const CTASec = dynamic(() => import("./CTA-Sec/cta-sec"))
const Types = dynamic(() => import("./Types/types"))
const Packages = dynamic(() => import("./Packages/packages"))
const Statistics = dynamic(() => import("./Statistics/statistics"))
const WeWork = dynamic(() => import("./We-Work/we-work"))
const Faqs = dynamic(() => import("./Faqs/faqs"))
const Reviews = dynamic(() => import("./Reviews/reviews"))
const EmblaCarousel = dynamic(() => import("./Embla/embla-carousel"))
const OurClients = dynamic(() => import("./Our-Clients/our-clients"))
const Footer = dynamic(() => import("./Footer/footer"))
const FooterForm = dynamic(() => import("./Footer-Form/footer-form"))

export {
  Header,
  Hero,
  CTA,
  ContactForm,
  TrustedLogos,
  DigitalBranding,
  Projects,
  CTASec,
  Types,
  Packages,
  Statistics,
  WeWork,
  Faqs,
  Reviews,
  EmblaCarousel,
  OurClients,
  Footer,
  FooterForm,
}
