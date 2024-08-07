//import React from 'react'
import SimpleCardTeste from '../../Components/Cards/SimpleCardTeste'
import TitlePages from '../../Components/TitlePages/TitlePages'
import './Sites.css'

const Sites = () => {
  return (
    <div>
    <TitlePages title='Como funciona'/>
    <div className='sites'>
        <div className='site'>
            <SimpleCardTeste />
        </div>
        <div className='site'>
          <SimpleCardTeste />
        </div>
        <div className='site'>
          <SimpleCardTeste />
        </div>
    </div>
  </div>
  )
}

export default Sites