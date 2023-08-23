import React, { useState, useEffect } from "react";

export const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check
    checkIsMobile();

    // Add a listener to update isMobile on window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const imageSrc = isMobile
    ? `./image/Banner-servicios-movil.png`
    : `./image/Banner-servicios-pc.png`;

  return (
    <section className="about" id="about">
      <div className="image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="content">
        <a href={`https://wa.me/3516890981`} className="btn">
          Hace tu Consulta
        </a>
      </div>
    </section>
  );
};
