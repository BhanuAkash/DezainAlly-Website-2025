import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function WexLogoAnimation() {
  const animContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Homepage1920_wex.json", // <-- Put JSON in /public folder
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
    className="anime-container"
      
    >
      <div
        ref={animContainer}
        style={{
          transform: "scale(0.8) translateY(5px)",
          transformOrigin: "center",
        }}
      ></div>
    </div>
  );
}
