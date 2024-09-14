//import React from 'react'
import './Projetos.css'
import Kuaray from '../../assets/Kuaray.jpg'
import TitlePages from '../../Components/TitlePages/TitlePages'
import { ArrowBackIosNew, ArrowForwardIos} from '@mui/icons-material'
import { IconButton } from '@mui/material'

const Projetos = () => {
  return (
    <div>
      <TitlePages title='Projetos'/>
      <div className='projetos'>
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
                  <div className='slide-info'>
                    <img src={Kuaray} alt='' className='img1'/>  
                  </div>
                  <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero molestias nisi eaque consequatur suscipit!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero molestias nisi eaque consequatur suscipit!
                  
                  </p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='slide-info'>
                    <img src={Kuaray} alt='' className='img1'/>  
                  </div>
                  <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero molestias nisi eaque consequatur suscipit!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero molestias nisi eaque consequatur suscipit!
                 
                  </p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='slide-info'>
                    <img src={Kuaray} alt='' className='img1'/>  
                    <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero molestias nisi eaque consequatur suscipit!</p>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Projetos