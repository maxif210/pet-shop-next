
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
       <h2>Seleccione un rango de precios</h2>
       <div className='categoryContainer'>
       <div className='categoryItem'>
       <label className='labelPrice'>Minimo: </label>
       <input type="number" value={min} onChange={(e)=>handleChangeMin(Number(e.target.value))} />
        
       </div>
       <div className='categoryItem'>
        <label className='labelPrice'>Maximo: </label>
       <input type="number" value={max} onChange={(e)=>handleChangeMax(Number(e.target.value))} />
        
        </div>
        
       </div>
      </div>
  )
}

export default FilterPrice