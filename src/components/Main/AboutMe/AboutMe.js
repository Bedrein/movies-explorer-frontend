import './AboutMe.css';
import { Link } from 'react-router-dom';
import myPhoto from '../../../images/myphoto.JPG';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__discription'>
        <div>
          <h1 className='about-me__discription_title'>Дмитрий</h1>
          <h2 className='about-me__discription_subtitle'>
            Фронтенд-разработчик, 33 года
          </h2>
          <p className='about-me__discription_text'>
            Я живу в Воронеже, закончил ВГУИТ по специальности "Информационные
            технологии". У меня есть жена и дочь. Работаю в настоящее время
            начальником сектора отдела разработки апаратуры регулирования и
            контроля для космических караблей, работа связана с цифровой и
            аналоговой схемотехникой, имею опыт написания программ для разных
            видов микроконтроллеров. Решил изменить жизнь помяняв профессию на
            "Фронтенд-разработчик", которую считаю очень интересной и
            перспективной.
          </p>

          <Link
            className='about-me__discription_link'
            to='https://github.com/Bedrein/'>
            Github
          </Link>
        </div>

        <img
          className='about-me__discription_photo'
          src={myPhoto}
          alt='фотография'
        />
      </div>
    </section>
  );
}

export default AboutMe;
