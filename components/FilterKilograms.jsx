import React, { useMemo, useState } from "react";

const FilterKilograms = ({ products, onChange }) => {
  const [selected, setSelected] = useState(() => new Set());
  const kilos = useMemo(() => {
    const kg = new Set();
    for (let product of products) {
      kg.add(product.kg.trim());
    }
    return Array.from(kg);
  }, [products]);

  function handleChange(kg, isChecked) {
    const draft = structuredClone(selected);
    if (isChecked) {
      draft.add(kg);
    } else {
      draft.delete(kg);
    }
    onChange(draft.size ? (product) => draft.has(product.kg.trim()) : null);
    setSelected(draft);
  }

  const kilosAcomodados = kilos.sort((a, b) => {
    if (Number(a) == Number(b)) {
      return 0;
    }
    if (Number(a) < Number(b)) {
      return -1;
    }
    return 1;
  });

  return (
    <div>
      <div className="filterContainer">
        <div className="tabs">
          <div className="tab">
            <input className="check" type="checkbox" id="chck1" />
            <label className="tab-label categoryTitle" htmlFor="chck1">
              Buscar por Kg
            </label>
            <div className="tab-content">
              <ul className="ul">
                {kilosAcomodados.map((kg) => (
                  <li key={kg}>
                    <input
                      className="input"
                      onChange={(e) => handleChange(kg, e.target.checked)}
                      type="checkbox"
                      name="kilo"
                      value={kg.trim()}
                    />
                    <label>{kg.trim()}Kg</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterKilograms;
