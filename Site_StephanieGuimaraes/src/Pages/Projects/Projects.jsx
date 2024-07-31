//import React from 'react'
import './Projects.css'
//import PortFolio1 from '../../assets/PortFolio1.png'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'
import TitlePages from '../../Components/TitlePages/TitlePages'

const Projects = () => {
  return (
    <div>
      <TitlePages title='Projetos'/>
      <div className='projects'>
        <div className='projects-left'>
          {/* <img src={PortFolio1} alt='' className='PortFolio1'/> */}
          <img src={FotoProvisoria} alt='' className='site-img1'/>
          <img src={FotoProvisoria} alt='' className='site-img1'/>
        </div>
        <div className='projects-right'>
          <h3>Projetos</h3>
          <h2>Lorem, ipsum dolor sit amet consectetur.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis cum dicta ipsum tempore eligendi.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects