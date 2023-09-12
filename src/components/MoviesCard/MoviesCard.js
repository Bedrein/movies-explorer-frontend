import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();

  const [isLike, setIsLike] = useState(false);

  const handleLikeButton = () => {
    setIsLike(!isLike);
  };

  return (
    <li className='card'>
      <img
        className='card__image'
        src={props.movie.image}
        alt='Постер фильма'
      />
      <div className='card__container'>
        <h2 className='card__title'>{props.movie.nameRU}</h2>

        {location.pathname === '/saved-movies' ? (
          <button className='card__delete-button' />
        ) : (
          <button
            className={`card__like-button ${
              isLike ? 'card__like-button_active' : ''
            }`}
            onClick={handleLikeButton}
          />
        )}
      </div>
      <p className='card__subtitle'>{props.movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
