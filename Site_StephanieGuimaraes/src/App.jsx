//import React from 'react'
import Contact from './Pages/Contact/Contact'
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
        <Contact/>
      </div>
    </div>
  )
}

export default App