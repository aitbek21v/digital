import React, {useState} from 'react';
import "../Header/header.scss"
import '../Header/headerMedia.scss'
import '../../pages/media.scss'
import '@fontsource/inter'
import ins from '../../img/ins.png'
import face from '../../img/face.svg'
import tel from '../../img/tel.svg'
import dis from '../../img/dis.svg'
import {Link} from "react-router-dom";
import kgz from '../../img/kgz.png'
import usa from '../../img/usa.jpeg'
import rus from '../../img/rus.jpeg'
import logo from '../../img/logooo.png'
import Menu from "../../pages/Menu";


const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [img, setImg] = useState(1)

    const openSelect = () => {
        setIsOpen(!isOpen)
    }
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
        <div id="header">
            <div className="container">
                <nav className='nav-btn'>
                    <div className="burger-btn" onClick={() => setIsOpen(!isOpen)}>
                        <span/>
                    </div>
                </nav>
                <div className="header">
                    <h1 style={{color:'white'}}>Logo</h1>
                    <nav>
                        <Link to={'/'}>Главная</Link>
                        <Link onClick={() => scrollToSection('about')}>О нас</Link>
                        <Link onClick={() => scrollToSection('usluga')}>Услуги</Link>
                        <Link onClick={() => scrollToSection('title')}>FAQ</Link>


                            <>
                                <img style={{
                                    display: img === 1 ? 'block' : 'none'
                                }} onClick={() =>{
                                    setImg(2)
                                }} width={30} src={kgz} alt=""/>
                                <img style={{
                                    display: img === 2 ? 'block' : 'none'
                                }} onClick={() =>{
                                    setImg(3)
                                }} width={30} src={usa} alt=""/>
                                <img style={{
                                    display: img === 3 ? 'block' : 'none'
                                }} onClick={() =>{
                                    setImg(1)
                                }} width={30} src={rus} alt=""/>
                            </>

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


                    </nav>


                </div>
                <hr/>
                <Menu active={isOpen} setActive={setIsOpen}/>
            </div>
        </div>
    );
};

export default Header;