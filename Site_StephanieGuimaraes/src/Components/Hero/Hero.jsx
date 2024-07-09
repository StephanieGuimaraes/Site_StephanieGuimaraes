//import React from 'react'
import './Hero.css'
import VideoHomeKuaray from "../../assets/VideoHomeKuaray.mp4";

const Hero = () => {
  return (
    <div  className='hero container'>
        <video autoPlay loop muted className="video-background">
            <source src={VideoHomeKuaray} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className='hero-text'>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, totam. Lorem ipsum dolor sit amet.</p>
          <button className='btn'>Contato</button>
        </div>
    </div>
  )
}

export default Hero