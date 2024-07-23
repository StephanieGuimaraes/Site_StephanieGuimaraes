//import React from 'react'
import './Navbar.css'
import logo_Teste from '../../assets/logo_Teste.png'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { GitHub, Instagram, LinkedIn, MailOutline, Phone } from '@mui/icons-material';
import { Divider, Stack } from '@mui/material';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 350 ? setSticky(true) : setSticky(false)
    })
  },[]);

  return (
    <nav>
      <div className='container big-nav'>
        <ul className='inside-small-nav'>
          <li><Stack direction="row" alignItems="center"><Phone sx={{color:"#3E9BC1", fontSize: 30}}/><p>+55(62)982149782</p></Stack></li>
          <div>
            
            <li><Stack direction="row"><LinkedIn sx={{color:"#3E9BC1", fontSize: 30}}/></Stack></li>
            <li><Stack direction="row"><GitHub sx={{color:"#3E9BC1", fontSize: 30}}/></Stack></li>
            <li><Stack direction="row"><Instagram sx={{color:"#3E9BC1", fontSize: 30}}/></Stack></li>
            <Divider orientation='vertical' variant="middle" flexItem/>
            <li><Stack direction="row" alignItems="center"><MailOutline sx={{color:"#3E9BC1", fontSize: 30}}/><p>stephanieguimaraes7@gmail.com</p></Stack></li>
          </div>
        </ul>
      </div>
      <div className={`container menu ${sticky ? 'small-nav' : ''}`}>
        <div>
          <img src={logo_Teste} alt='logo escrito Stephanie Guimarães' className='logo'></img>
        </div>
        <div>
          <ul>
              <li className='nav-buttons'><Link className='btn_primary' to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
              <li className='nav-buttons'><Link className='btn_primary' to='publications' smooth={true} offset={-260} duration={500}>Publications</Link></li>
              <li className='nav-buttons'><Link className='btn_primary' to='site' smooth={true} offset={-260} duration={500}>Work Projects</Link></li>
              {/* <li className='nav-buttons'><button className='btn_primary'>Grad School Projects</button></li> */}
              <li className='nav-buttons'><Link className='btn_primary' to='contact' smooth={true} offset={-260} duration={500}>Contato</Link></li>
              <li className='nav-buttons'><button className='btn_secondary'><Link to='footer' smooth={true} offset={-260} duration={500}>About Me</Link></button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar