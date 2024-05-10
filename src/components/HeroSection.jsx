import React from 'react'
import myHead from '../assets/header.png'
const HeroSection = () => {
  return (
    <section className='container'>
        <div className="clearbg">
            <div className='heroSection'>
                <div className='wrapper'>
                    <h3 className='subhead'>Graphic and Web Designer</h3>
                    <h1 className='heading'>Hello, I'm <strong>Dictor</strong> Olame from Kakuma , Kenya</h1>
                </div>
                <div className='wrapper'>
                    <div className='greenCircle'>
                        <img className='myHead' src={myHead} alt="Dictor OLame" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection