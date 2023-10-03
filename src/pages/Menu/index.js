import React from 'react';
import {Link} from "react-router-dom";
import '../Menu/menu.css'
import face from "../../img/face.svg";
import dis from "../../img/dis.svg";
import tel from "../../img/tel.svg";
import ins from "../../img/ins.png";




const Menu = ({active,setActive}) => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const instagramImage = (
        <img
            src={ins}
            alt="Instagram"
        />
    );
    return (
        <div className={active ? 'menu active': 'menu'} onClick={() => setActive(false)}>
            <div className='blur'/>
            <div className="menu--content" onClick={event => event.stopPropagation()}>
                <nav className='almaz'>
                    <Link to={'/'}>Главная</Link>
                    <Link onClick={() => scrollToSection('about')}>О нас</Link>
                    <Link onClick={() => scrollToSection('usluga')}>Услуги</Link>
                    <Link onClick={() => scrollToSection('title')}>FAQ</Link>

                    <div className="block">
                        <div>
                            <a
                                href={'https://www.instagram.com/tura5aev.dev/'}
                                target='_blank'
                                rel='noopener noreferrer'
                            > {instagramImage}</a>
                        </div>
                        <div>
                            <img src={face} alt=""/>
                        </div>
                        <div>
                            <img src={dis} alt=""/>

                        </div>
                        <div>
                            <img src={tel} alt=""/>
                        </div>
                    </div>


                </nav>
            </div>
        </div>
    );
};

export default Menu;