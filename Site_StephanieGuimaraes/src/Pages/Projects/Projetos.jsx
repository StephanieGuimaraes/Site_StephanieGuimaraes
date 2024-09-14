//import React from 'react'
import './Projetos.css'
import Kuaray from '../../assets/Kuaray.jpg'
import TitlePages from '../../Components/TitlePages/TitlePages'
import { ArrowBackIosNew, ArrowForwardIos} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRef } from 'react'

const Projetos = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = ()=>{
    if(tx > -50){
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBack = ()=>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div>
      <TitlePages title='Projetos'/>
      <div className='projetos'>
          <IconButton size='large'
            onClick={slideBack}
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
          onClick={slideForward}
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
            <ul ref={slider}>
              <li>
                <div className='slide'>
                  <div className='slide-info'>
                    <img src={Kuaray} alt='' className='img1'/>  
                  </div>
                  <div>
                      <h3>William Jackson 1</h3>
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
                      <h3>William Jackson 2</h3>
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
                      <h3>William Jackson 3</h3>
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
                      <h3>William Jackson 4</h3>
                      <span>Edusity, USA</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero molestias nisi eaque consequatur suscipit!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero molestias nisi eaque consequatur suscipit!
                 
                  </p>
                </div>
              </li>
              
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Projetos