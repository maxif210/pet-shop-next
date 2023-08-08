import React from "react";

export const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <div>
          <h3>
            {" "}
            Bienvenidos a Veterinaria <br />
            {/* <span>Tu-Can</span> */}
          </h3>
          <img
            className="hero-logo"
            alt="logo"
            width="90px"
            height="6%"
            src="image/logoVete.webp"
          />
        </div>
        <a href="#shop" className="btn-home">
          Comprar ahora
        </a>
      </div>
      <img src="image/bottom_wave.webp" className="wave" alt="" />
    </section>
  );
};
