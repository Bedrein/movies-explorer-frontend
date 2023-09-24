import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/constans.js';

import './MoviesCard.css';

function MoviesCard({
  isSavedMoviesPage,
  savedMovies,
  onSave,
  onDelete,
  movie,
}) {
  const location = useLocation();

  const imageUrl = isSavedMoviesPage ? movie.image : BASE_URL + movie.image.url;
  const isSaved =
    !isSavedMoviesPage && savedMovies.some((item) => item.movieId === movie.id);

  function handleSave() {
    onSave(movie);
  }

  function handleDelete() {
    onDelete(movie);
  }
  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} ч ${remainingMinutes} мин`;
  }
  const formattedDuration = convertMinutesToHoursAndMinutes(movie.duration);

  return (
    <li className='card' key={movie.id}>
      <Link to={movie.trailerLink} target='_blank' rel='noopener noreferrer'>
        <img className='card__image' src={imageUrl} alt={movie.nameRU} />
      </Link>
      <div className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>

        {location.pathname === '/saved-movies' ? (
          <button className='card__delete-button' onClick={handleDelete} />
        ) : (
          <button
            className={`card__like-button ${
              isSaved ? 'card__like-button_active' : ''
            }`}
            onClick={!isSavedMoviesPage ? handleSave : handleDelete}
          />
        )}
      </div>
      <p className='card__subtitle'>{formattedDuration}</p>
    </li>
  );
}

export default MoviesCard;
