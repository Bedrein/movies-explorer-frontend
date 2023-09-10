import promoImage from '../../../images/promo.png';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <h2 className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h2>

        <a className='promo__link' href='#about-project'>
          <button className='promo__btn'>Узнать больше</button>
        </a>
      </div>

      <div>
        <img className='promo__image' src={promoImage} alt='Планета' />
      </div>
    </section>
  );
}

export default Promo;
