import Main from '../Main/Main.js';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';

import Footer from '../Footer/Footer.js';

import './App.css';

import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userSessionChanged, setUserSessionChanged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);
  const [serverError, setServerError] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [registerError, setRegisterError] = useState('');

  // Проверка токена
  function handleCheckToken() {
    const token = localStorage.getItem('token');

    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  }

  // Функция регистрации
  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    return mainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(err);
        setRegisterError('Введен неверный Email или пароль');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //обработчик авторизации пользователя
  function handleLogin({ email, password }) {
    setIsLoading(true);
    return mainApi
      .login({ email, password })
      .then((res) => {
        localStorage.setItem('token', res.token);
        setIsLoggedIn(true);
        navigate('/movies');
      })

      .catch((err) => {
        console.log(err);
        setLoginErrorMessage('Введен неверный Email или пароль');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Функция обновления профиля
  const handleUpdateProfile = ({ email, name }) => {
    return mainApi
      .patchProfileInfo({ email, name })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setShowPopup(true);
      })
      .catch((err) => {
        console.log(err);
        setServerError('Введены некоректные данные');
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  const getMovies = () => {
    return moviesApi
      .getMovies()
      .then((movies) => {
        setAllMovies(movies);
        return movies;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveMovie = (movie) => {
    const isSaved = savedMovies.some((item) => item.movieId === movie.id);

    if (!isSaved) {
      mainApi
        .saveMovie(movie)
        .then((savedMovie) => {
          setSavedMovies([...savedMovies, savedMovie]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const movieDelete = savedMovies.find((item) => item.movieId === movie.id);
      if (movieDelete && movieDelete._id) {
        const movieId = savedMovies.find(
          (item) => item.movieId === movie.id
        )._id;
        mainApi
          .deleteMovie(movieId)
          .then(() => {
            setSavedMovies((movies) =>
              movies.filter((item) => item._id !== movieId)
            );
          })
          .catch((err) => {
            console.error('Ошибка удаления фильма: ', err);
          });
      } else {
        console.error('Нет фильма с таким id!!!');
      }
    }
  };

  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  };

  function handleDeleteMovie(movie) {
    return mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.error('Ошибка удаления фильма: ', err);
      });
  }

  ///занос прощфиля в контекст
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getProfileInfo()
        .then((res) => {
          setCurrentUser(res);
          console.log('dddd ' + setCurrentUser(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  ///проверка токена
  useEffect(() => {
    handleCheckToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Получение списка фильмов
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        setAllMovies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при получении фильмов: ', err);
        setError('Ошибка при загрузке фильмов');
        setIsLoading(false);
      });
  }, [userSessionChanged]);

  // Получение сохраненных фильмов
  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.error('Ошибка при получении сохраненных фильмов: ', err);
      });
  }, [userSessionChanged]);

  useEffect(() => {
    if (
      isLoggedIn &&
      (location.pathname === '/signin' || location.pathname === '/signup')
    ) {
      navigate('/movies');
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route
            path='/'
            element={
              <>
                <Header loggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <>
                <Header loggedIn={isLoggedIn} />
                <Movies
                  loggedIn={isLoggedIn}
                  currentUser={currentUser}
                  movies={allMovies}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovie}
                  getMovies={getMovies}
                />
                <Footer />
              </>
            }
          />

          <Route
            path='/saved-movies'
            element={
              <>
                <Header loggedIn={isLoggedIn} />
                <SavedMovies
                  movies={savedMovies}
                  onDelete={handleDeleteMovie}
                  loggedIn={isLoggedIn}
                  currentUser={currentUser}
                  getSavedMovies={getSavedMovies}
                />
                <Footer />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <Header loggedIn={isLoggedIn} />
                <Profile
                  onUpdateProfile={handleUpdateProfile}
                  onLogout={handleLogout}
                  serverError={serverError}
                  setServerError={setServerError}
                />
              </>
            }
          />
          <Route
            path='/signin'
            element={
              <>
                <Login
                  handleLogin={handleLogin}
                  setErrorMessage={setLoginErrorMessage}
                  errorMessage={loginErrorMessage}
                  isLoading={isLoading}
                />
              </>
            }
          />
          <Route
            path='/signup'
            element={
              <>
                <Register
                  handleRegister={handleRegister}
                  errorMessage={registerError}
                  setErrorMessage={setRegisterError}
                  isLoading={isLoading}
                />
              </>
            }
          />
        </Routes>
        <InfoTooltip
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          message='Данные успешно изменены!'
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
