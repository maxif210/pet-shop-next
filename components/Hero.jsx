import React from "react";

export const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <img
          src="/image/banner-bienvenida-pc.png"
          srcSet="/image/banner-bienvenida-pc.png 1400w,/image/banner-bienvenida-movil.png 768w"
          sizes="(min-width: 1200px) 1400px,
                (min-width: 768px) 768px,
                100vw"
          alt="ImagenHome"
        ></img>
        <div className="button-container">
          <a href="#shop" className="btn-home">
            COMPRAR AHORA
          </a>
        </div>
      </div>
    </section>
  );
};
