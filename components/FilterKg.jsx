import React, { useMemo, useState } from "react";

const Filterkg = ({ products, onChange }) => {
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
     
      <div className="nameFilterContainer">

      <div className="row">
        <div className="col">
      
      <div className="tabs">
        <div className="tab">
          <input type="checkbox" id="chck1" />
          <label className="tab-label" htmlFor="chck1">
           buscar por Kilo
          </label>
          <div className="tab-content">
          <ul>
              {kilosAcomodados.map((kg) => (
                <li key={kg}>
                  <input
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
       
            
          </div>
        </div>
     
  );
};

export default Filterkg;
