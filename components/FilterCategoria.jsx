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
    <div>
        <div className="categoryContainer">
        <h2 className="tab-label">
           Selecciona por Kilo
        </h2>
        <div className="categoryItem">
          <input
            type="checkbox"
            value="perro"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <img width="80" height="80" src="image/perro.webp" alt="perro" />
        </div>
        <div className="categoryItem">
          <input
            type="checkbox"
            value="gato"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <img width="80" height="80" src="image/gato.webp" alt="gato" />
        </div>
      </div>
    </div>
   
  );
};

export default FilterCategoria;
