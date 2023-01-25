import React, { useMemo, useState } from "react";

const FilterBrand = ({ products, onChange }) => {
  const [selected, setSelected] = useState(() => new Set());
  const marcas = useMemo(() => {
    const brand = new Set();
    for (let product of products) {
      brand.add(product.marca.trim());
    }
    return Array.from(brand);
  }, [products]);

  function handleChange(marca, isChecked) {
    const draft = structuredClone(selected);
    if (isChecked) {
      draft.add(marca);
    } else {
      draft.delete(marca);
    }
    onChange(draft.size ? (product) => draft.has(product.marca.trim()) : null);
    setSelected(draft);
  }

  const marcasAcomodadas = marcas.sort((a, b) => {
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });

  return (
    <div>
      <div className="filterContainer">
      
            <div className="tabs">
              <div className="tab">
                <input type="checkbox" id="chck2" />
                <label className="tab-label categoryTitle" htmlFor="chck2">
                  Buscar por marca
                </label>
                <div className="tab-content">
                  <ul>
                    {marcasAcomodadas.map((marca) => (
                      <li key={marca}>
                        <input
                          onChange={(e) =>
                            handleChange(marca, e.target.checked)
                          }
                          type="checkbox"
                          name="marca"
                          value={marca.trim()}
                        />
                        <label>{marca.trim()}</label>
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

export default FilterBrand;
