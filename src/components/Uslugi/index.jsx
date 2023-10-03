import React from 'react';
import icon from '../../img/icon1.svg'
import '../Uslugi/uslugi.scss'
import '../Uslugi/uslugiMedia.scss'
import '../../pages/media.scss'

const Uslugi = () => {
    return (
        <div id='usluga'>
            <div className="container">
                <h1>Услуги</h1>
                <p>Мы можем взять на себя полный цикл
                    <br/>разработки вашего интернет продукта!</p>
                <div className="usluga">
                    <div className="usluga--block">
                        <h2>UX/UI дизайн</h2>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Сделаем ваш продукт незабываемым</h5>
                        </div>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Быстро и качественно</h5>
                        </div>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>За короткое время</h5>
                        </div>
                    </div>
                    <div className="usluga--block">
                        <h2>Создание сайта <br/>и настройка рекламы</h2>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Мы создаем сайты,которые продают.</h5>
                        </div>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Настройте рекламу,которая работает.</h5>
                        </div>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Быстро и качественно</h5>
                        </div>
                    </div>
                    <div className="usluga--block">
                        <h2>Разработка мобильных
                            приложений</h2>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Быстро и качественно</h5>

                        </div>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Увеличим продаж</h5>

                        </div>
                        <div>
                            <img src={icon} alt=""/>
                            <h5>Для IOS и ANDROID</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Uslugi;