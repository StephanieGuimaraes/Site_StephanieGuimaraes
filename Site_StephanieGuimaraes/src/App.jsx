//import React from 'react'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import Hero from './Pages/Hero/Hero'
import Navbar from './Pages/Navbar/Navbar'
import Projects from './Pages/Projects/Projects'
import Publications from './Pages/Publications/Publications'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Projects/>
        <Publications/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App