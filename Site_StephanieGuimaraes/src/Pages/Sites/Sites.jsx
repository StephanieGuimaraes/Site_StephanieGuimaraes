//import React from 'react'
import SimpleCard from '../../Components/Cards/SimpleCard'
import TitlePages from '../../Components/TitlePages/TitlePages'
import FotoProvisoria from '../../assets/FotoProvisoria.jpg'
import './Sites.css'

const Sites = () => {
  return (
    <div>
    <TitlePages title='Como funciona'/>
    <div className='sites'>
        <div className='site'>
            <SimpleCard></SimpleCard>
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