"use client"
import { useEffect } from 'react';

const ScriptsCode = () => {
  useEffect(() => {
    // Load Tawk.to chat script
    const timer = setTimeout(() => {
      const tawkScript = document.createElement("script");
      tawkScript.async = true;
      tawkScript.src = 'https://embed.tawk.to/66d1ff6150c10f7a00a22440/1i6i4r5nd';
      tawkScript.charset = 'UTF-8';
      tawkScript.setAttribute('crossorigin', '*');
      document.body.appendChild(tawkScript);
    }, 5000);

    // Load Google Analytics script
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HQKBXEMEH3";
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-HQKBXEMEH3');
    };

    // Load Google Tag Manager script
    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TMGRWM6V";
    document.head.appendChild(gtmScript);

    // Add Google Tag Manager noscript to body
    const noscript = document.createElement("noscript");
    noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMGRWM6V" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    document.body.appendChild(noscript);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(gtagScript);
      document.head.removeChild(gtmScript);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
}

export default ScriptsCode;
