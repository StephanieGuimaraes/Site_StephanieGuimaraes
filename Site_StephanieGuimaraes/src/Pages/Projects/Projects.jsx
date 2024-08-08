//import React from 'react'
import './Projects.css'
//import PortFolio1 from '../../assets/PortFolio1.png'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'
import TitlePages from '../../Components/TitlePages/TitlePages'
import { ArrowBackIosNew, ArrowForwardIos} from '@mui/icons-material'
import { IconButton } from '@mui/material'

const Projects = () => {
  return (
    <div>
      <TitlePages title='Projetos'/>
      <div className='projects'>
          <IconButton size='large'
           sx={{
            position:"absolute",
            top: "50%",
            right: "auto",
            left: "0",
            transform: 'TranslateY(-50%)',
            color: "var(--black)",
            '&:hover': {
              backgroundColor: "var(--primary-100)", 
            }
          }}
          >
            <ArrowBackIosNew fontSize='inherit' sx={{color: "var(--black)"}}/>
          </IconButton>
          <IconButton size='large'
           sx={{
            position:"absolute",
            top: "50%",
            right: "0",
            transform: 'TranslateY(-50%)',
            color: "var(--black)",
            '&:hover': {
              backgroundColor: "var(--primary-100)", 
            }
          }}
          >
            <ArrowForwardIos fontSize='inherit' sx={{color: "var(--black)"}}/>
          </IconButton>

          <div className='slider'>
            <ul>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={FotoProvisoria} alt='' className='img1'/>  
                    <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={FotoProvisoria} alt='' className='img1'/>  
                    <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={FotoProvisoria} alt='' className='img1'/>  
                    <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
              
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Projects