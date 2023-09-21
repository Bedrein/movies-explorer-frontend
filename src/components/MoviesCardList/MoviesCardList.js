import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({
  moviesList,
  isSavedMoviesPage,
  savedMovies,
  savedMoviesList,
  onSave,
  onDelete,
}) {
  const renderMovies = isSavedMoviesPage ? savedMoviesList : moviesList;
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {renderMovies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id}
            onSave={onSave}
            onDelete={onDelete}
            isSavedMoviesPage={isSavedMoviesPage}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
