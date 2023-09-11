import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__container'>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link'
            to={'https://github.com/Bedrein/how-to-learn'}
            target='_blank'>
            Статичный сайт
            <p className='portfolio__arrow'>↗</p>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link'
            to={'https://github.com/Bedrein/russian-travel'}
            target='_blank'>
            Адаптивный сайт
            <p className='portfolio__arrow'>↗</p>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link'
            to={'https://github.com/Bedrein/react-mesto-api-full-gha'}
            target='_blank'>
            Одностраничное приложение
            <p className='portfolio__arrow'>↗</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
