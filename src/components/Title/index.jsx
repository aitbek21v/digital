import React from 'react';
import '../Title/title.scss'
import '../Title/titleMedia.scss'
import blu2 from '../../img/blue2.svg'
import '../../pages/media.scss'


const Title = () => {
    return (
        <div id='title'>
            <div className="container">
                <h1>FAQ</h1>
                <div className="title">
                    <div className='title--title2'>
                        <h2>Что такое домен и для чего он нужен?</h2>
                        <p>Так как невозможно запомнить множество IP-адресов,
                            <br/>было предложено давать каждому сайту свое
                            <br/>уникальное название с помощью доменного имени.
                            <br/>Простыми словами, домен — это адрес, который есть
                            <br/>у каждого дома. По этому адресу нам легко найти
                            <br/>нужный дом (сайт) среди множества ресурсов в сети.</p>
                    </div>
                    <div className="title--block">
                        <div className="title--block__block2">
                            <div className="title--block__block2--block3">
                                <img src={blu2} alt=""/>
                                <h4>Зачем нужен сайт?</h4>
                            </div>
                            <ul>
                                <li>Веб-сайт – это место, <br/>где можно опубликовать </li>
                                <li>подробную информацию <br/>о компании, услугах, </li>
                                <li>условиях заказа и выполнении <br/>услуг, контактах и
                                    реквизитах</li>
                            </ul>
                        </div>
                        <div className="title--block__block2">
                            <div className="title--block__block2--block3">
                                <img src={blu2} alt=""/>
                                <h3>Сколько времени занимает
                                    <br/>разработка корпоративного
                                    <br/>сайта?</h3>
                            </div>
                            <ul>
                                <li>Разработка корпоративного сайта по сроку
                                    <br/>исполнения будет обсуждаться <br/>индивидуально с
                                    каждым заказчиком. </li>
                                <li>Ориентировочно разработка
                                   <br/> подобного рода сайтов занимает <br/>время от 15-ти
                                    рабочих дней</li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;