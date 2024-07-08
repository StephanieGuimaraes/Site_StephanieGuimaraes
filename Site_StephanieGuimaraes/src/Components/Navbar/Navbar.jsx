import React from 'react'
import './Navbar.css'
import logo_Teste from '../../assets/logo_Teste.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo_Teste} alt='logo escrito Stephanie Guimarães' className='logo'></img>
        <ul>
            <li>Home</li>
            <li>Publications</li>
            <li>Work Projects</li>
            <li>Grad School Projects</li>
            <li>About Me</li>
        </ul>
    </nav>
  )
}

export default Navbar