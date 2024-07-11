//import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Publications from './Components/Publications/Publications'
import TitlePages from './Components/TitlePages/TitlePages'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <TitlePages title='Publications'/>
        <Publications/>
      </div>
    </div>
  )
}

export default App