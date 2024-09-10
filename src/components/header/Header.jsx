import React from 'react'
import NavBar from './NavBar'
import Switch from './Switch'

const header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <a href="#">Vicky_Co.</a>
      </div>
      <NavBar/>
      <Switch/>
    </header>
  )
}

export default header