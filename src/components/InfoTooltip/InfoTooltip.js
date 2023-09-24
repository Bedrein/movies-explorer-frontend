import success from '../../images/ok.svg';
import iconClose from '../../images/close_icon.svg';

import './InfoTooltip.css';

function InfoTooltip(props) {
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container popup__container-infoTooltip'>
        <button
          type='button'
          className='popup__button-close'
          onClick={props.onClose}>
          <img
            src={iconClose}
            alt='Крест для закрытия'
            className='popup__icon-close'
          />
        </button>

        <img
          className='popup__status'
          src={success} // сделать с ошбкой как в mesto
          alt={success}
        />

        <p className='popup__message'>{props.message}</p>
      </div>
    </section>
  );
}

export default InfoTooltip;
