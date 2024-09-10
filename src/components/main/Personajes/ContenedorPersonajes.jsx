import React from 'react'


const ContenedorPersonajes = ({ personajes, selectedIndice }) => {
  const personajeSeleccionado = personajes.find(p => p.indice === selectedIndice);

  return (
    <div>
      {personajeSeleccionado ? (
        <div className='con-pers'>
          <div className='con-img-pers'>
            
              <img src={personajeSeleccionado.imagen} className='img-pers' alt={personajeSeleccionado.alt} /></div>
         
          <div className='con-txt-pers'>
            <div className='con-tit-pers'>
              <p className='nomb-pers'>{personajeSeleccionado.nombre}</p>
              <p className='clas-pers'>{personajeSeleccionado.clase}</p>
            </div>
            <div className='con-his-pers'>
              <article className='his-pers'>{personajeSeleccionado.historia}</article>
              <div>
                <p className='ideal-pers'>{personajeSeleccionado.ideal}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};



export default ContenedorPersonajes