import React from 'react';
import '../Hero/hero.scss'
import img1 from '../../img/img1.png'
import '../Hero/heroMedia.scss'
import '../../pages/media.scss'

import CallButton from "../../pages/CallButton";

const Hero = () => {
    const phoneNumber = '+9960220462390'
    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`
    }
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--title">
                        <p>Превратите свои идеи в реальность с нашей <br/>помощью</p>

                        <h1>Доверьте <br/>разработку <br/>профессионалам</h1>
                        <button onClick={handleClick}>Позвонить</button>
                    </div>
                    <div className="hero--container">
                        <img src={img1} alt="Animated Image" className="animated-image"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;