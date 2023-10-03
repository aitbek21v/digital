import React from 'react';
import '../Sena/sena.scss'
import '../Sena/senaMedia.scss'
import '../../pages/media.scss'


const Sena = () => {
    return (
        <div id='sena'>
            <div className="container">
                <h1>Цены</h1>
                <p>Здесь вы можете ознакомиться с
                   <br/> ценообразованием на наши услуги</p>
                <div className="sena">
                    <div className="sena--block">
                        <div className="sena--block__flex">
                            <div className="flex1">
                                <h4>Landing page</h4>
                                <p>от 5000 сом</p>
                            </div>
                            <div className="flex1">
                                <h4>Корпоративные сайты</h4>
                                <p>от 18000 сом</p>
                            </div>
                            <div className="flex1">
                                <h4>Интернет магазин</h4>
                                <p>от 28000 сом</p>
                            </div>
                            <div className="flex1">
                                <h4>Мобильное приложение</h4>
                                <p>Договорная</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sena;