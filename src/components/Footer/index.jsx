import React from 'react';
import '../Footer/footer.scss'
import '../Footer/footerMedia.scss'
import '../../pages/media.scss'

import ins from '../../img/ins.png'
import face from '../../img/face.svg'
import tel from '../../img/tel.svg'
import dis from '../../img/dis.svg'
const Footer = () => {
    const instagramImage = (
        <img
            src={ins} // Замените на URL своей иконки Instagram
            alt="Instagram"
        />
    );
    return (
      <div id="footer">
          <div className="container">
              <div className="footer">
                  <div className="footer--icons">
                      <a
                          href={'https://www.instagram.com/tura5aev.dev/'}
                          target='_blank'
                          rel='noopener noreferrer'
                      > {instagramImage}</a>
                      <img src={tel} alt=""/>
                      <img src={face} alt=""/>
                      <img src={dis} alt=""/>
                  </div>
              </div>
              <p>digital.space • 2023-2024</p>
          </div>
      </div>
    );
};

export default Footer;