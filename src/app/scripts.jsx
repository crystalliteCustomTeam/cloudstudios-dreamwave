"use client"
import { useEffect } from 'react';

const ScriptsCode = () => {
  useEffect(() => {


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
