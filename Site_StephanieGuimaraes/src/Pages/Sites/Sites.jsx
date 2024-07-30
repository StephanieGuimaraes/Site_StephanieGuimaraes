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
            <SimpleCard cardTitle="Landing Page Simples" price="999"/>
        </div>
        <div className='site'>
            <SimpleCard cardTitle="Landing Page Simples" price="2500"/>
        </div>
        <div className='site'>
            <SimpleCard cardTitle="Landing Page Simples" price="4500"/>
        </div>
    </div>
  </div>
  )
}

export default Sites