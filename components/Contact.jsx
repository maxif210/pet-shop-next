import React from 'react'

export const Contact = () => {
  return (
    <section className="contact" id="contact">
    <div className="image">
      <img src="image/contact_img.webp" alt="" />
    </div>
    <form action="">
      <h3>Contacto</h3>
      <input type="text" placeholder="Nombre" className="box" />
      <input type="email" placeholder="Email" className="box" />
      <input type="tumber" placeholder="Telefono" className="box" />
      <textarea
        name=""
        placeholder="Mensaje"
        id=""
        cols={30}
        rows={10}
        defaultValue={""}
      />
      <input type="submit" defaultValue="send message" className="btn" />
    </form>
  </section>
  )
}
