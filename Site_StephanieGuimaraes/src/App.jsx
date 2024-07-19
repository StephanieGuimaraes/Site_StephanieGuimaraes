//import React from 'react'
import Hero from './Pages/Hero/Hero'
import Navbar from './Pages/Navbar/Navbar'
import Publications from './Pages/Publications/Publications'
import Sites from './Pages/Sites/Sites'

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