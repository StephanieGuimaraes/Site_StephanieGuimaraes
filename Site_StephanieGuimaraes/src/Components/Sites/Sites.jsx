//import React from 'react'
import './Sites.css'
//import PortFolio1 from '../../assets/PortFolio1.png'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'
import TitlePages from '../TitlePages/TitlePages'

const Sites = () => {
  return (
    <div>
      <TitlePages title='Work Projects'/>
      <div className='site'>
        <div className='site-left'>
          {/* <img src={PortFolio1} alt='' className='PortFolio1'/> */}
          <img src={FotoProvisoria} alt='' className='site-img1'/>
          <img src={FotoProvisoria} alt='' className='site-img1'/>
        </div>
        <div className='site-right'>
          <h3>About university</h3>
          <h2>Lorem, ipsum dolor sit amet consectetur.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis cum dicta ipsum tempore eligendi.</p>
        </div>
      </div>
    </div>
  )
}

export default Sites