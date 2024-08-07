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
            <SimpleCardTeste 
              tag={false} 
              title="Landing Page Complexa"
              subText="Lizards are a widespread group of squamate reptiles, with over 6,000
                species"
              price={2999}
              listItems={["Header", "4 seções", "Footer"]}
            />
        </div>
        <div className='site'>
          <SimpleCardTeste 
            tag={true} 
            title="Landing Page Simples"
            subText="Lizards are a widespread group of squamate reptiles, with over 6,000
                species"
            price={1999}
            listItems={["Header", "4 seções", "Footer"]}
          />
        </div>
        <div className='site'>
          <SimpleCardTeste 
            tag={false} 
            title="Site com integrações"
            subText="Lizards are a widespread group of
                species"
            price={3999}
            listItems={["Header", "4 seções"]}
          />
        </div>
    </div>
  </div>
  )
}

export default Sites