//import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Publications from './Components/Publications/Publications'
import Sites from './Components/Sites/Sites'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Publications/>
        <Sites/>
      </div>
    </div>
  )
}

export default App