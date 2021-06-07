import React, { useRef, useEffect } from "react";

import "./styles.scss";

const CARBON_URL =
  "https://cdn.carbonads.com/carbon.js?serve=CESD553L&placement=responsivelyapp";

export const CarbonAds = React.memo(() => {
  const ref = useRef();

  useEffect(() => {
    const container = ref.current;
    // Add a tiny delay because Docusaurus rerenders the sidebar twice
    // on first page load
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.src = CARBON_URL;
      script.async = true;
      script.id = "_carbonads_js";
      container.appendChild(script);
    }, 100);

    return () => clearTimeout(timeout);
  }, [ref]);

  useEffect(() => {
    const interval = setInterval(() => {
      [...ref.current.children].forEach((child) => {
        if (child.id.startsWith("carbonads_")) {
          ref.current.removeChild(child);
        }
      });
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <div
      ref={ref}
      className="CarbonAdsWrapper d-flex mt-4 mb-4 justify-content-center"
    ></div>
  );
});
