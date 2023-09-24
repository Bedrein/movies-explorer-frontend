import React from 'react';
import { useState, useEffect } from 'react';
import FilterSlider from '../Movies/FilterSlider/FilterSlider.js';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './SavedMovies.css';

function SavedMovies({ movies, onDelete }) {
  useEffect(() => {
    localStorage.setItem('currentPath', '/saved-movies');
  }, []);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);

  useEffect(() => {
    filterMovies(query, isShortFilm);
  }, [movies, query, isShortFilm]);

  const handleSearch = (newQuery, newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);

    const filteredMovies = movies.filter((movie) => {
      const includesQuery =
        movie.nameRU.toLowerCase().includes(newQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(newQuery.toLowerCase());

      if (newIsShortFilm) {
        return includesQuery && movie.duration <= 40;
      } else {
        return includesQuery;
      }
    });

    setSearchResults(filteredMovies);
  };
  const filterMovies = (query, isShortFilm) => {
    let filteredMovies = movies;
    if (isShortFilm) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }
    const filteredResults = filteredMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <section className='saved-movies'>
      <SearchForm
        query={query}
        setQuery={setQuery}
        isShortFilm={isShortFilm}
        onSearch={handleSearch}
      />
      <FilterSlider
        query={query}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        onFilter={filterMovies}
      />
      <MoviesCardList
        savedMoviesList={searchResults}
        isSavedMoviesPage={true}
        onDelete={onDelete}
      />
      <div className='movies__box'></div>
    </section>
  );
}
export default SavedMovies;
