//import React from 'react'
import './Navbar.css'
import LogoBranca from '../../assets/LogoBranca.png'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { GitHub, Instagram, LinkedIn, MailOutline, WhatsApp } from '@mui/icons-material';
import { Divider, Stack, Typography } from '@mui/material';

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
            <li>
              <Stack direction="row" alignItems="center" gap="8px">
                <a href="https://wa.me/5562982149782" target="_blank">
                  <WhatsApp sx={{color:"#3E9BC1", fontSize: 30}}/>    
                </a>
                <Typography fontFamily="Poppins" fontSize="16px" fontWeight={500} color="#676767">Contato: +55(62)982149782</Typography>
              </Stack>
            </li>
          <div className='icons-right'>
            <li>
              <Stack direction="row" alignItems="center">
                <a href="https://www.linkedin.com/in/stephanie-cardoso-guimaraes-319306107/" target="_blank">
                  <LinkedIn sx={{ color: "#3E9BC1", fontSize: 30 }} />
                </a>
              </Stack>
            </li>
            <li>
              <Stack direction="row" alignItems="center">
                <a href="https://github.com/StephanieGuimaraes" target="_blank">
                   <GitHub sx={{color:"#3E9BC1", fontSize: 30}}/>
                </a>
              </Stack>
            </li>
            <li>
              <Stack direction="row" alignItems="center">
                <a href="https://www.instagram.com/steph_guimaraes/" target="_blank">
                <Instagram sx={{color:"#3E9BC1", fontSize: 30}}/>
                </a>
              </Stack>
            </li>
            <Divider orientation='vertical' variant="middle" flexItem/>
            <li>
              <Stack direction="row" alignItems="center" gap="8px"><MailOutline sx={{color:"#3E9BC1", fontSize: 30}}/>
                <Typography fontFamily="Poppins" fontSize="16px" fontWeight={500} color="#676767">stephanieguimaraes7@gmail.com</Typography>
              </Stack>
            </li>
          </div>
        </ul>
      </div>
      <div className={`container menu ${sticky ? 'small-nav' : ''}`}>
        <div>
          <img src={LogoBranca} alt='logo escrito Stephanie Guimarães' className='logo'></img>
        </div>
        <div>
          <ul>
              <li className='nav-buttons'>
                <Link className='btn_primary' to='home' smooth={true} offset={0} duration={500}>Início{/*Home*/}</Link>
              </li>
              <li className='nav-buttons'>
                <Link className='btn_primary' to='sites' smooth={true} offset={-260} duration={500}>Como funciona</Link>
              </li>
              
              <li className='nav-buttons'>
                <Link className='btn_primary' to='projects' smooth={true} offset={-260} duration={500}>Projetos{/*Work projects*/}</Link> 
              </li>
              <li className='nav-buttons'>
                <Link className='btn_primary' to='publications' smooth={true} offset={-260} duration={500}>Publicações{/*Publications*/}</Link>
              </li>
              <li className='nav-buttons'>
                <button className='btn_secondary'><Link to='contact' smooth={true} offset={-260} duration={500}>Contato</Link></button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar