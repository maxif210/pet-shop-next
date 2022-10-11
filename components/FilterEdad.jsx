
import React, { useState } from 'react'



const FilterEdad = ({ onChange}) => {
   const [selected, setSelected] = useState("")
    
    
    function handleChange(edad, isChecked){
    
      if(isChecked){
        onChange(edad ? (product) => product.edad.trim() == edad : null)
         setSelected(edad)
      }else{
        onChange(null)
      }
    
    }
    
   
   
  return (
      <div>
       <div className='categoryContainer'>
       <h2 className="tab-label">Seleccione una Edad</h2>
       <div className='categoryItem'>
       <input type="checkbox" value='Adulto' onChange={(e)=>handleChange(e.target.value, e.target.checked)} />
        <h3>Adulto</h3>
       </div>
       <div className='categoryItem'>
       <input type="checkbox" value='Joven' onChange={(e)=>handleChange(e.target.value, e.target.checked)} />
        <h3>joven</h3>
        </div>
        
       </div>
      </div>
  )
}

export default FilterEdad