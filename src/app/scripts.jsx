"use client"
import { useEffect } from 'react';
import Head from "next/head"
const ScriptsCode = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      //======== ZenDesk ========//
      // const zenDesk = document.createElement("script");
      // zenDesk.id = "ze-snippet";
      // zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
      // zenDesk.async = true;
      // zenDesk.defer = true;
      // document.body.appendChild(zenDesk);

      const tawkScript = document.createElement("script");
      tawkScript.async = true;
      tawkScript.src = 'https://embed.tawk.to/66d1ff6150c10f7a00a22440/1i6i4r5nd';
      tawkScript.charset = 'UTF-8';
      tawkScript.setAttribute('crossorigin', '*');
      document.body.appendChild(tawkScript);

      //======= Google Tag Manager =======//
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-HQKBXEMEH3';
      document.body.appendChild(gtagScript);

      const gtagInlineScript = document.createElement("script");
      gtagInlineScript.innerHTML = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HQKBXEMEH3');
            `;
      document.body.appendChild(gtagInlineScript);

      //======= Google Tag Manager (noscript) =======//
      const gtmNoScript = document.createElement("noscript");
      gtmNoScript.innerHTML = `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMGRWM6V"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `;
      document.body.appendChild(gtmNoScript);

    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TMGRWM6V"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
  );
}

export default ScriptsCode
