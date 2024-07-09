import React from 'react'
import './Navbar.css'
import logo_Teste from '../../assets/logo_Teste.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo_Teste} alt='logo escrito Stephanie Guimarães' className='logo'></img>
        <ul>
            <li><button className='btn_primary'>Home</button></li>
            <li><button className='btn_primary'>Publications</button></li>
            <li><button className='btn_primary'>Work Projects</button></li>
            <li><button className='btn_primary'>Grad School Projects</button></li>
            <li><button className='btn_secondary'>About Me</button></li>
        </ul>
    </nav>
  )
}

export default Navbar