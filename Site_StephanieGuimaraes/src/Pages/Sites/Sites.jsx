//import React from 'react'
import SimpleCard from '../../Components/Cards/SimpleCard'
import TitlePages from '../../Components/TitlePages/TitlePages'
import './Sites.css'

const Sites = () => {
  return (
    <div>
    <TitlePages title='Como funciona'/>
    <div className='sites'>
        <div className='site'>
            <SimpleCard/>
        </div>
        <div className='site'>
        <SimpleCard/>
        </div>
        <div className='site'>
        <SimpleCard/>
        </div>
    </div>
  </div>
  )
}

export default Sites