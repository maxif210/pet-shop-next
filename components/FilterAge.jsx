import React, { useState } from "react";

const FilterAge = ({ onChange }) => {
  const [selected, setSelected] = useState("");

  function handleChange(edad, isChecked) {
    if (isChecked) {
      onChange(edad ? (product) => product.edad.trim() == edad : null);
      setSelected(edad);
    } else {
      onChange(null);
    }
  }

  return (
    <div>
      <div className="filterContainer">
        <h2 className="tab-label categoryTitle">Buscar por Edad </h2>
        <div className="categoryItem">
          <input
            type="checkbox"
            value="Adulto"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <span>Adulto</span>
        </div>
        <div className="categoryItem">
          <input
            type="checkbox"
            value="Joven"
            onChange={(e) => handleChange(e.target.value, e.target.checked)}
          />
          <span>Cachorro</span>
        </div>
      </div>
    </div>
  );
};

export default FilterAge;
