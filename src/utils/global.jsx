import { useEffect } from "react";



const Global = () => {
  useEffect(() => {
    // Load JS files dynamically after component mounts
    const scriptUrls = [
      "/src/assets/js/jquery.min.js",
      "/src/assets/js/bootstrap.bundle.min.js",
      "/src/assets/js/modernizr.custom.js",
      "/src/assets/js/jquery-plugin-collection.js",
      "/src/assets/js/script.js",
      
    ];

    scriptUrls.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      // Cleanup scripts when component unmounts
      scriptUrls.forEach((src) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) existingScript.remove();
      });
    };
  }, []);

  return null; // No UI needed, just imports CSS and loads JS
};

export default Global;
