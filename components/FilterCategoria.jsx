
import React, { useState } from 'react'



const FilterCategoria = ({ onChange}) => {
   const [selected, setSelected] = useState("")
    
    
    function handleChange(categoria, isChecked){
    
    
      if(isChecked){
        onChange(categoria ? (product) => product.categoria.trim() == categoria : null)
         setSelected(categoria)
      }else{
        onChange(null)
      }
    
    }
    
   
   
  return (
      <div>
       <h2>Seleccione una categorias</h2>
       <div className='categoryContainer'>
       <div className='categoryItem'>
       <input type="checkbox" value='perro' onChange={(e)=>handleChange(e.target.value, e.target.checked)} />
        <img width="80" height="80" src="image/perro.webp" alt="perro"/>
       </div>
       <div className='categoryItem'>
       <input type="checkbox" value='gato' onChange={(e)=>handleChange(e.target.value, e.target.checked)} />
        <img width="80" height="80" src="image/gato.webp" alt="gato"/>
        </div>
        
       </div>
      </div>
  )
}

export default FilterCategoria