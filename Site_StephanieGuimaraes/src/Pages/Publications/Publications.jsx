//import React from 'react'
import './Publications.css'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'
import TitlePages from '../../Components/TitlePages/TitlePages'
import MediaCard from '../../Components/Cards/MediaCard'

const Publications = () => {
  return (
    <div>
      <TitlePages title='Publicações'/>
      <div className='publications'>
          <div className='publication'>
              <MediaCard/>
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