import Image from 'next/image'
import React from 'react'


const Consejos = ({consejos}) => {
    
  return (
    <section className="services" id="services">
    <h1 className="heading">
      {" "}
      <span>Consejos</span>{" "} para tu Mascota
    </h1>
    <div className="box-container">
        {consejos.map((item)=>(
            <div key={item.id} className="box">
            <div className='imgBox'>
            <img width="60px" height="60px" src="image/logoVete.webp" alt="logo" />
            </div>
            <h3>{item.title}</h3>
            <img src={item.image} width="200px" height="200px" alt={item.title} />
           <br />
            <h4>{item.description}</h4>
            <a href="#" className="btn">
             Leer más
            </a>
          </div>
        ))}
      
    </div>
    </section>
  )
}

export default Consejos