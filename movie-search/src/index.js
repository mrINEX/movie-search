require('./js/create');
require('./js/keyboard');
const { findMovies, next } = require('./js/OMBd');
const {
  prevMovie, nextMovie, startSwipe, runSwipe, startTouchSwipe, runTouchSwipe,
} = require('./js/slider');

window.onload = () => {
  document.querySelector('.input-search').focus();

  document.querySelector('.input-search').addEventListener('change', ({ target }) => {
    findMovies(target.value);
  });

  document.querySelector('.virtual-enter').addEventListener('click', () => {
    const input = document.querySelector('.input-search').value;
    findMovies(input);
  });

  document.querySelector('.arrow-left').addEventListener('click', () => {
    prevMovie(next);
  });
  document.querySelector('.arrow-right').addEventListener('click', () => {
    nextMovie(next);
  });

  const movies = document.querySelector('.movies-block');

  movies.addEventListener('mousedown', startSwipe);
  movies.addEventListener('mouseup', (event) => {
    runSwipe(event, next);
  });

  movies.addEventListener('touchstart', (event) => {
    startTouchSwipe(event, next);
  });
  movies.addEventListener('touchmove', (event) => {
    event.preventDefault();
  });
  movies.addEventListener('touchend', (event) => {
    runTouchSwipe(event, next);
  });
};
