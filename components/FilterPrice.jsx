
import React, { useState } from 'react'



const FilterPrice = ({ onChange}) => {
    const [min, setMin] = useState(0)
   const [max, setMax] = useState(0)
    
    
    function handleChangeMin(value){
    setMin(value)
   
    onChange(value ? (product) => product.price >= value : null)
    }
    function handleChangeMax(value){
      setMax(value)
      
      onChange(value ? (product) => product.price <= value : null)
       }
   
   
  return (
      <div>
       <div className='filterContainer'>
       <h4 className="tab-label categoryTitle">Buscar por Precio</h4>
       <div className='categoryItem'>
       <label className='labelPrice'>Minimo:</label>
       <input className='priceBackground' type="number" value={min} onChange={(e)=>handleChangeMin(Number(e.target.value))} />
        
       </div>
       <div className='categoryItem'>
        <label className='labelPrice'>Maximo: </label>
       <input className='priceBackground' type="number" value={max} onChange={(e)=>handleChangeMax(Number(e.target.value))} />
        
        </div>
        
       </div>
      </div>
  )
}

export default FilterPrice