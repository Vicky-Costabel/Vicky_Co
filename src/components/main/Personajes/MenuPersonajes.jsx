import React from 'react'

const MenuPersonajes = ( {personajes, onIndiceClick, selectedIndice}) => {
  const menuPersonajes = document.querySelectorAll('indice-item');
 

  return (
    <div className='menu-pers'> 
      <div className='menu-cont-pers'>
       {personajes.map((personaje, index) => (
        <div 
        key={index} 
        onClick={() => onIndiceClick(personaje.indice)}
        className= {`indice-item ${selectedIndice === personaje.indice ? 'active' : ''}`}

      >
        {personaje.indice}
      </div>
      ))}

      </div>
    </div>
  )
}

export default MenuPersonajes