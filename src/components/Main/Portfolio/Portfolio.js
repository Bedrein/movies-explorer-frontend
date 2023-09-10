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
            to={'https://github.com/Bedrein/how-to-learn'}>
            Статичный сайт
          </Link>

          <div>
            <p className='portfolio__arrow'>↗</p>
          </div>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link'
            to={'https://github.com/Bedrein/russian-travel'}>
            Адаптивный сайт
          </Link>

          <div>
            <p className='portfolio__arrow'>↗</p>
          </div>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link'
            to={'https://github.com/Bedrein/react-mesto-api-full-gha'}>
            Одностраничное приложение
          </Link>

          <div>
            <p className='portfolio__arrow'>↗</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
