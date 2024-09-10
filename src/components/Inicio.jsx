import React from 'react'
import Perfil from './main/Perfil'
import Personajes from './main/Personajes'
import Porfolio from './main/Porfolio'
import Literatura from './main/Literatura'

const Inicio = () => {
  return (
    <main>
      <Perfil/>
      <Personajes/>
      <Porfolio/>
      {/* <Literatura/> */}
    </main>
  )
}

export default Inicio