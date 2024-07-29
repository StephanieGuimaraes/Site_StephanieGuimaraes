//import React from 'react'
import './Home.css'
import VideoHomeKuaray from "../../assets/VideoHomeKuaray.mp4";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div  className='home container'>
        <video autoPlay loop muted className="video-background">
            <source src={VideoHomeKuaray} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className='home-text'>
          <h1>Criamos seu site profissional.</h1>
          <p>Transforme sua visão em realidade com nossos serviços de desenvolvimento web.<br/>
            Utilizamos React a melhor e mais moderna tecnologia do mercado para criar sites rápidos e responsivos.<br/>
            Com excelente custo-benefício. Feito sob medida para seu negócio.</p>
          <button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Entre em Contato</Link></button>
          {/* <button className='btn_secondary'>Entre em Contato</button> */}
        </div>
    </div>
  )
}

export default Home