import React from "react";

const Ofertas = ({ products }) => {
  const result = products.filter((item) => item.oferta);

  return (
    <section className="shop">
      <h3 className="heading">Ofertas</h3>
      <div className="products">
        {result.map((item) => (
          <div className="box" key={item.id}>
            <div className="imageOferta">
              <img src={item.oferta} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <a
          href={`https://wa.me/3516890981?text=Hola, me gustaria consultar las ofertas`}
          className="btn"
        >
          Consulta por Stock
        </a>
      </div>
    </section>
  );
};

export default Ofertas;
