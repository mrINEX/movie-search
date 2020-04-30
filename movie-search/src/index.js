require('./js/create');
require('./js/OMBd');
const { translate } = require('./js/translate');
const { getMovies } = require('./js/OMBd');
const {
  prevMovie, nextMovie, checkMovies, startSwipe, runSwipe,
} = require('./js/slider');

window.onload = () => {
  let next = getMovies('dream');
  next();

  document.querySelector('.input-search').addEventListener('change', ({ target }) => {
    if (/[а-яА-Я]/.test(target.value)) {
      translate(target.value)
        .then((word) => {
          document.querySelectorAll('.movie').forEach((el) => el.remove());
          next = getMovies(word);
          next();
        });
    }

    if (/[a-zA-Z]/.test(target.value)) {
      document.querySelectorAll('.movie').forEach((el) => el.remove());
      next = getMovies(target.value);
      next();
    }
  });

  document.querySelector('.arrow-left').addEventListener('click', () => {
    checkMovies(next);
    prevMovie();
  });
  document.querySelector('.arrow-right').addEventListener('click', () => {
    nextMovie();
  });

  document.querySelector('.movies-block').addEventListener('mousedown', startSwipe);
  document.querySelector('.movies-block').addEventListener('mouseup', (event) => {
    checkMovies(next);
    runSwipe(event);
  });
};
