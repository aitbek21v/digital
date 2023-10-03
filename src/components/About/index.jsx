import React from 'react';
import '../About/about.scss'
import img2 from '../../img/img2.png'
import '../About/aboutMedia.scss'
import '../../pages/media.scss'



const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <img src={img2} alt=""/>

                    <div className="about--title">
                        <h1>О нас</h1>
                        <p>Мы - молодая и креативная команда <br/>профессионалов, занимающихся <br/>разработкой и продвижением сайтов любой <br/>сложности.</p>
                        <h5>Наша цель - помочь Вам достичь успеха в <br/>онлайн-бизнесе и улучшить взаимодействие <br/>с клиентами. Доверьте свой проект нам и <br/>получите высококачественный результат</h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;