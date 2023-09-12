import Main from '../Main/Main.js';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';

import Footer from '../Footer/Footer.js';

import './App.css';

import React from 'react';
// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route
          path='/'
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />
        <Route
          path='/signin'
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <Register />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
