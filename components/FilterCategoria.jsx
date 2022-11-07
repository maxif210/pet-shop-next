import React, { useState } from "react";

const FilterCategoria = ({ onChange }) => {
  const [selected, setSelected] = useState("");

  function handleChange(categoria, isChecked) {
    if (isChecked) {
      onChange(
        categoria ? (product) => product.categoria.trim() == categoria : null
      );
      setSelected(categoria);
    } else {
      onChange(null);
    }
  }

  return (
    <div className="tipoContainer">
       
        <h2 className="tab-label">
           Como es tu mascota
        </h2>
       <div className="categoryFlex">
       <div className="categoryItem">
          <input
            type="checkbox"
            value="perro"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <img width="90" height="90" src="image/categoria1.png" alt="perro" />
        </div>
        <div className="categoryItem">
          <input
            type="checkbox"
            value="gato"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <img width="90" height="90" src="image/6.png" alt="gato" />
        </div>
        
          <div className="categoryItem">
          <input
            type="checkbox"
            value="peces"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <img width="90" height="90" src="image/pez2.png" alt="gato" />
        </div>
        <div className="categoryItem">
          <input
            type="checkbox"
            value="roedores"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <img width="90" height="90" src="image/hamster1.png" alt="gato" />
        </div>
        
       </div>
      </div>
    
   
  );
};

export default FilterCategoria;
