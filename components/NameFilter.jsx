import React, { useMemo, useState } from 'react'


const NameFilter = ({products, onChange}) => {
   const [selected, setSelected] = useState(()=> new Set())
    const marcas = useMemo(()=> {
        const brand = new Set();
        for(let product of products) {
            brand.add(product.marca.trim())
        }
        return Array.from(brand)
    }, [products])
    
    function handleChange(marca, isChecked){
    const draft = structuredClone(selected)
    if(isChecked){
        draft.add(marca)
    } else {
        draft.delete(marca)
    }
    onChange(draft.size ? (product) =>  draft.has(product.marca.trim()): null)
    setSelected(draft) 
    }
    
   
   
  return (
      <div>
        <h2> Seleccione una Marca</h2>
        <div className='nameFilterContainer'>
        <ul>
        {marcas.map((marca)=>(
            <li key={marca}>
                <input onChange={(e)=> handleChange(marca, e.target.checked)} type="checkbox" name='marca' value={marca.trim()} />
                <label>{marca.trim()}</label>
            </li>
        ) )}
    </ul>
    </div>
      </div>
  )
}

export default NameFilter