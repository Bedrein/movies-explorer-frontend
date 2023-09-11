import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__navigation'>
        <div className='footer__copyrigt'>
          <p className='footer__caption'> © 2023</p>
        </div>

        <div className='footer__links'>
          <Link
            className='footer__link'
            to='https://practicum.yandex.ru/'
            target='_blank'>
            Яндекс.Практикум
          </Link>
          <Link
            className='footer__link'
            to='https://github.com/Bedrein'
            target='_blank'>
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
