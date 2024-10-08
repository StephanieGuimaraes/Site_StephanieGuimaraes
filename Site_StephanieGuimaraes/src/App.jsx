//import React from 'react'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import Navbar from './Pages/Navbar/Navbar'
import Projetos from './Pages/Projects/Projetos'
import Sites from './Pages/Sites/Sites'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
        <Sites/>
        <Projetos/>
        {/* <Publications/> */}
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App