import '../hero/Hero.css'
import React from 'react';
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import { Link } from 'react-router-dom';


function Hero(){
    return(
        <div className="hero">
            <div className="hero-left">
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <Link to={'/womens'}>
                        <div>Ver Tudo em Feminino</div>
                    </Link>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero;