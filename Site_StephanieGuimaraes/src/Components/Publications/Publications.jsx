//import React from 'react'
import './Publications.css'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'

const Publications = () => {
  return (
    <div className='publications'>
        <div className='publication'>
            <img src={FotoProvisoria} alt=''/>
        </div>
        <div className='publication'>
            <img src={FotoProvisoria} alt=''/>
        </div>
        <div className='publication'>
            <img src={FotoProvisoria} alt=''/>
        </div>
    </div>
  )
}

export default Publications