import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/globals.scss";
import ScriptsCode from "@/src/app/scripts";
import ConditionalLayout from "./conditionallayout";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://cloudstudios.us/"),
  //===== Meta Tags =====
  title: "Cloud Studios Inc: Cutting-Edge Video Animation Studio in USA.",
  description: "Cloud Studios Inc. delivers innovative animation, video production services, and VFX solutions. From cel animation, hybrid animation, 3D visualization, and AR/VR augmentation to real-time rendering, we are the 'destination' for your brand's success. ",
  //===== OG Tags =====
  openGraph: {
    title: "Cloud Studios Inc: Cutting-Edge Video Animation Studio in USA.",
    description: "Cloud Studios Inc. delivers innovative animation, video production services, and VFX solutions. From cel animation, hybrid animation, 3D visualization, and AR/VR augmentation to real-time rendering, we are the 'destination' for your brand's success. ",
    url: "/",
    siteName: "Cloud Studios Inc",
    locale: "en_US",
    type: "website",
    images: "/public/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ScriptsCode />
      <body className={poppins.className}>
        <ConditionalLayout >
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
