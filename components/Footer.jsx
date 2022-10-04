import React from 'react'

export const Footer = () => {
  return (
    <section className="footer">
    <img src="image/top_wave.webp" alt="" />
    <div className="share">
      <a href="#" className="btn">
        {" "}
        <i className="fab fa-facebook-f" /> facebook{" "}
      </a>
      <a href="#" className="btn">
        {" "}
        <i className="fab fa-twitter" /> twitter{" "}
      </a>
      <a href="#" className="btn">
        {" "}
        <i className="fab fa-instagram" /> instagram{" "}
      </a>
      <a href="#" className="btn">
        {" "}
        <i className="fab fa-linkedin" /> linkedin{" "}
      </a>
      <a href="#" className="btn">
        {" "}
        <i className="fab fa-pinterest" /> pinterest{" "}
      </a>
    </div>
    <div className="credit">
      {" "}
      Veterinaria <span> Tucán </span> | todos los derechos reservados!{" "}
    </div>
  </section>
  )
}
