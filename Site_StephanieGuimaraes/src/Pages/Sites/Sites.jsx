//import React from 'react'
import TitlePages from '../../Components/TitlePages/TitlePages'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'
import './Sites.css'

const Sites = () => {
  return (
    <div>
    <TitlePages title='Sites'/>
    <div className='sites'>
        <div className='site'>
            <img src={FotoProvisoria} alt=''/>
        </div>
        <div className='site'>
            <img src={FotoProvisoria} alt=''/>
        </div>
        <div className='site'>
            <img src={FotoProvisoria} alt=''/>
        </div>
    </div>
  </div>
  )
}

export default Sites