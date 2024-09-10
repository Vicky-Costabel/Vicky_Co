import React from 'react'

const NavBar = () => {

  return (
    <nav>
        <div className="navegacion">
            <ul className='nav-bar'>
                <li className='nav-link'>
                    <a href="#perfil" className='perfil'>
                        <span>Perfil</span>
                    </a>   
                </li>
                <li className='nav-link'>
                    <a href="#personajes" className='personajes'>
                        <span>Personajes</span>
                    </a>  
                </li>
                <li className='nav-link'>
                    <a href="#porfolio" className='porfolio'>
                        <span>Porfolio</span>    
                    </a>  
                </li>
                {/* <li className='nav-link'>
                    <a href="#literatura" className='literatura'>
                        <span>Literatura</span>
                    </a>  
                </li> */}
            </ul>
        </div>  
    </nav>
  )
}

export default NavBar