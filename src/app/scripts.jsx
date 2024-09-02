"use client"
import { useEffect } from 'react';

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


        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default ScriptsCode
