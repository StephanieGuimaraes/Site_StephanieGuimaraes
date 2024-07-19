//import React from 'react'
import './Navbar.css'
import logo_Teste from '../../assets/logo_Teste.png'
import { useState } from 'react'
import { useEffect } from 'react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 400 ? setSticky(true) : setSticky(false)
    })
  },[]);

  return (
    <nav>
      <div className='container big-nav'>
        <ul className='inside-small-nav'>
          <li><button>Home</button></li>
          <li><button>Home</button></li>
          <li><button>Home</button></li>
        </ul>
      </div>
      <div className={`container menu ${sticky ? 'small-nav' : ''}`}>
        <div>
          <img src={logo_Teste} alt='logo escrito Stephanie Guimarães' className='logo'></img>
        </div>
        <div>
          <ul>
              <li className='nav-buttons'><button className='btn_primary'>Home</button></li>
              <li className='nav-buttons'><button className='btn_primary'>Publications</button></li>
              <li className='nav-buttons'><button className='btn_primary'>Work Projects</button></li>
              <li className='nav-buttons'><button className='btn_primary'>Grad School Projects</button></li>
              <li className='nav-buttons'><button className='btn_secondary'>About Me</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar