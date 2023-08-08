import React, { useState } from "react";

const FilterCategory = ({ onChange }) => {
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
    <div className="filterContainer">
      <h4 className="tab-label categoryTitle">Categoría</h4>

      <div className="categoryItem">
        <input
          type="checkbox"
          value="perro"
          onChange={(e) => handleChange(e.target.value, e.target.checked)}
        />
        <span>Perros</span>
      </div>
      <div className="categoryItem">
        <input
          type="checkbox"
          value="gato"
          onChange={(e) => handleChange(e.target.value, e.target.checked)}
        />
        <span>Gatos</span>
      </div>

      <div className="categoryItem">
        <input
          type="checkbox"
          value="peces"
          onChange={(e) => handleChange(e.target.value, e.target.checked)}
        />
        <span>Peces</span>
      </div>
      <div className="categoryItem">
        <input
          type="checkbox"
          value="roedores"
          onChange={(e) => handleChange(e.target.value, e.target.checked)}
        />
        <span>Roedores</span>
      </div>
    </div>
  );
};

export default FilterCategory;
