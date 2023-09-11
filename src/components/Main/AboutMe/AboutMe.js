import './AboutMe.css';
import { Link } from 'react-router-dom';
import myPhoto from '../../../images/myphoto.JPG';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__discription'>
        <div>
          <h3 className='about-me__discription-title'>Виталий</h3>
          <h4 className='about-me__discription-subtitle'>
            Фронтенд-разработчик, 30 лет
          </h4>
          <p className='about-me__discription-text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб&#8209;разработке, начал
            заниматься фриланс&#8209;заказами и ушёл с постоянной работы.
          </p>

          <Link
            className='about-me__discription-link'
            to='https://github.com/Bedrein/'
            target='_blank'>
            Github
          </Link>
        </div>

        <img
          className='about-me__discription-photo'
          src={myPhoto}
          alt='фотография'
        />
      </div>
    </section>
  );
}

export default AboutMe;
