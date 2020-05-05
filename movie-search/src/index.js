require('./js/create');
require('./js/keyboard');
const { translate } = require('./js/translate');
const { getMovies } = require('./js/OMBd');
const {
  prevMovie, nextMovie, startSwipe, runSwipe, startTouchSwipe, runTouchSwipe,
} = require('./js/slider');

window.onload = () => {
  document.querySelector('.input-search').focus();
  let response;
  let next = getMovies('dark');
  next();

  document.querySelector('.input-search').addEventListener('change', ({ target }) => {
    if (/[а-яА-Я]/.test(target.value)) {
      translate(target.value).then((word) => {
        response = getMovies(word);
        response().then((isCorrect) => {
          if (isCorrect) {
            document.querySelectorAll('.movie').forEach((movie) => movie.remove());
            next = response;
          }
        });
      });
    } else {
      response = getMovies(target.value);
      response().then((isCorrect) => {
        if (isCorrect) {
          document.querySelectorAll('.movie').forEach((movie) => movie.remove());
          next = response;
        }
      });
    }
  });

  document.querySelector('.input-button').addEventListener('click', () => {
    const input = document.querySelector('.input-search').value;
    if (/[а-яА-Я]/.test(input)) {
      translate(input).then((word) => {
        response = getMovies(word);
        response().then((isCorrect) => {
          if (isCorrect) {
            document.querySelectorAll('.movie').forEach((movie) => movie.remove());
            next = response;
          }
        });
      });
    } else {
      response = getMovies(input);
      response().then((isCorrect) => {
        if (isCorrect) {
          document.querySelectorAll('.movie').forEach((movie) => movie.remove());
          next = response;
        }
      });
    }
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
