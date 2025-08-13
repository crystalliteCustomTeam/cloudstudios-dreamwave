import { Poppins } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/globals.scss"
import ScriptsCode from "@/src/app/scripts"
import ConditionalLayout from "./conditionallayout"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  metadataBase: new URL("https://cloudstudios.us/"),
  //===== Meta Tags =====
  title: "Explainer Video Production & Animation Company - Cloud Studios",
  description:
    "Looking to make explainer videos for your business? Cloud Studios specializes in animated video production. ✓ Find out more about business animation videos!",
  //===== OG Tags =====
  openGraph: {
    title: "Explainer Video Production & Animation Company - Cloud Studios",
    description:
      "Looking to make explainer videos for your business? Cloud Studios specializes in animated video production. ✓ Find out more about business animation videos!",
    url: "/",
    siteName: "Cloud Studios Inc",
    locale: "en_US",
    type: "website",
    images: "/public/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },

  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [
        "iXqiyjFm-o64gnZr_ZT9hsttcsQawvQhu0QIPCxa5Os",
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ScriptsCode />
      <Script id="livechat-init" strategy="afterInteractive">
            {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19220066;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){
              function i(n){return e._h ? e._h.apply(null,n) : e._q.push(n)}
              var e = {
                _q: [], _h: null, _v: "2.0",
                on: function(){i(["on", c.call(arguments)])},
                once: function(){i(["once", c.call(arguments)])},
                off: function(){i(["off", c.call(arguments)])},
                get: function(){
                  if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                  return i(["get", c.call(arguments)])
                },
                call: function(){i(["call", c.call(arguments)])},
                init: function(){
                  var n = t.createElement("script");
                  n.async = true;
                  n.type = "text/javascript";
                  n.src = "https://cdn.livechatinc.com/tracking.js";
                  t.head.appendChild(n);
                }
              };
              !n.__lc.asyncInit && e.init();
              n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice);
          `}
          </Script>
      <body className={poppins.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
