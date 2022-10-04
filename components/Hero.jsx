import React from 'react'

export const Hero = () => {
  return (
    <section className="home" id="home">
    <div className="content">
      <h3>
        {" "}
        Bienvenidos a Veterinaria<span> Tucán</span>{" "}
      </h3>
      <a href="#shop" className="btn">
        Comprar ahora
      </a>
    </div>
    <img src="image/bottom_wave.webp" className="wave" alt="" />
  </section>
  )
}
