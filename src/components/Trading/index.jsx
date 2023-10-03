import React from 'react';
import '../Trading/trading.scss'
import trading from '../../img/trading.png'
import blue from '../../img/blue.svg'
import pirple from '../../img/pirple.svg'
import '../Trading/tradingMedia.scss'
import '../../pages/media.scss'

import kyr from '../../img/kyr.svg'
const Trading = () => {
    return (
        <div id='trading'>
            <div className="container">
                <h1>IT-рынок в цифрах: статистика и прогнозы развития</h1>
                <div className="trading">
                    <div className="trading--img">
                        <img src={trading} alt="" width={800}/>
                    </div>
                    <div className="trading--title">
                        <h2>Вывод:</h2>
                        <div>
                            <img src={blue} alt=""/>
                            <p>Минимальная торговая цена <br/>(Landing page)</p>
                        </div>

                        <div>
                            <img src={pirple} alt=""/>
                            <p>Максимальная торговая цена <br/>(Корпоративные сайты)</p>
                        </div>

                        <div>
                            <img src={kyr} alt=""/>
                            <p>Мобильные приложение</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Trading;