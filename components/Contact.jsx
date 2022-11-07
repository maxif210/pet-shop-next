import React, { useState } from 'react'

export const Contact = () => {
const [form, setForm] = useState({
  nombre: "",
  email: "",
  telefono: "",
  mensaje:""
})

  const handleSubmit = async (e) => {
    e.preventDefault()
    let name = e.target[0].value;
    let email = e.target[1].value;
    let telefono = e.target[2].value;
    let mensaje = e.target[3].value;
    

    setForm({
      nombre: name,
      email: email,
      telefono: telefono,
      mensaje: mensaje
    })
  }

  
 

  return (
    <section className="contact" id="contact">
    <div className="image">
      <img src="image/contact_img.webp" alt="" />
    </div>
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <h3>Contacto</h3>
      <input type="text" placeholder="Nombre" className="box" name="nombre"/>
      <input type="email" placeholder="Email" className="box" name="email"/>
      <input type="tumber" placeholder="Telefono" className="box" name="telefono"/>
      <textarea
        name="mensaje"
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
