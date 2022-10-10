import React, { useMemo, useState } from 'react'


const Filterkg = ({products, onChange}) => {
   const [selected, setSelected] = useState(()=> new Set())
    const kilos = useMemo(()=> {
        const kg = new Set();
        for(let product of products) {
            kg.add(product.kg.trim())
        }
        return Array.from(kg)
    }, [products])
    
    function handleChange(kg, isChecked){
    const draft = structuredClone(selected)
    if(isChecked){
        draft.add(kg)
    } else {
        draft.delete(kg)
    }
    onChange(draft.size ? (product) =>  draft.has(product.kg.trim()): null)
    setSelected(draft) 
    }
    
   
   
  return (
      <div>
        <h2> Seleccionar por Kilo</h2>
        <div className='nameFilterContainer'>
        <ul>
        {kilos.map((kg)=>(
            <li key={kg}>
                <input onChange={(e)=> handleChange(kg, e.target.checked)} type="checkbox" name='kilo' value={kg.trim()} />
                <label>{kg.trim()}Kg</label>
            </li>
        ) )}
    </ul>
    </div>
      </div>
  )
}

export default Filterkg