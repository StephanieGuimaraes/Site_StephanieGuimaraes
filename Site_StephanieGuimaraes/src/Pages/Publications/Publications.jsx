//import React from 'react'
import './Publications.css'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'
import TitlePages from '../../Components/TitlePages/TitlePages'

const Publications = () => {
  return (
    <div>
      <TitlePages title='Publications'/>
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
    </div>
  )
}

export default Publications