import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import FilterSlider from './FilterSlider/FilterSlider.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';

import './Movies.css';

function Movies({ movies, savedMovies, onSave, getMovies }) {
  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem('searchResults')) || []
  );
  useEffect(() => {
    localStorage.setItem('currentPath', '/movies');
  }, []);
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
  const [isShortFilm, setIsShortFilm] = useState(
    localStorage.getItem('isShortFilm') === 'true' || false
  );
  const [error, setError] = useState(null);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const handleIsShortFilm = (newValue) => {
    setIsShortFilm(newValue);
  };

  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem('isShortFilm', isShortFilm);
  }, [isShortFilm]);

  function getInitialVisibleCards() {
    const screenWidth = window.innerWidth;
    return screenWidth > 1160 ? 16 : screenWidth >= 641 ? 8 : 5;
  }

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1160) {
      setVisibleCards((visibleCards) => visibleCards + 4);
    } else {
      setVisibleCards((visibleCards) => visibleCards + 2);
    }
  };

  useEffect(() => {
    function handleResize() {
      setVisibleCards(getInitialVisibleCards());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filterMovies = (query, isShortFilm) => {
    setIsLoading(true);

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
    localStorage.setItem('searchResults', JSON.stringify(filteredResults));

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleSearch = async (query, isShortFilm) => {
    if (!query.trim()) {
      setError('Нужно ввести ключевое слово');
      return;
    } else {
      setError(null);
      /// здесь
      setIsLoading(true);
      let filteredMovies = movies;
      if (movies.length === 0) {
        filteredMovies = await getMovies();
      }

      let searchResults;

      if (isShortFilm) {
        filteredMovies = movies.filter((movie) => movie.duration <= 40);
        searchResults = filteredMovies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else {
        searchResults = filteredMovies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(query.toLowerCase())
          );
        });
      }
      setSearchResults(searchResults);
      setHasSearched(true);
      localStorage.setItem('searchResults', JSON.stringify(searchResults));
      setVisibleCards(getInitialVisibleCards());

      setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return;
    }
  };
  return (
    <section className='movies'>
      <SearchForm
        isShortFilm={isShortFilm}
        onSearch={handleSearch}
        query={query}
        setQuery={handleQuery}
      />
      <FilterSlider
        setIsShortFilm={handleIsShortFilm}
        onFilter={filterMovies}
        query={query}
        isShortFilm={isShortFilm}
      />

      {isLoading ? (
        <Preloader />
      ) : hasSearched && searchResults.length === 0 ? (
        <p className='movies__info'>Ничего не найдено</p>
      ) : (
        <MoviesCardList
          moviesList={searchResults.slice(0, visibleCards)}
          isSavedMoviesPage={false}
          savedMovies={savedMovies}
          onSave={onSave}
        />
      )}
      <p className='movies__info'>{error}</p>
      <div className='movies__container-more'>
        {searchResults === 0 || visibleCards < searchResults.length ? (
          <button
            className={`movies__button-more ${
              isLoading ? 'movies__button-more_hidden' : ''
            }`}
            onClick={handleShowMore}>
            Ещё
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default Movies;
