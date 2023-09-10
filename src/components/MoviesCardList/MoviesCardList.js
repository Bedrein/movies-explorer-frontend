import MoviesCard from '../MoviesCard/MoviesCard';
import moviesList from '../../utils/constans.js';

import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {moviesList.map((item) => (
          <MoviesCard key={item.id} movie={item} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
