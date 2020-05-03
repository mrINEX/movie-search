require('./js/create');
const { translate } = require('./js/translate');
const { getMovies } = require('./js/OMBd');
const {
  prevMovie, nextMovie, checkMovies, startSwipe, runSwipe, startTouchSwipe, runTouchSwipe,
} = require('./js/slider');

window.onload = () => {
  let next = getMovies('dream');
  next();

  document.querySelector('.input-search').addEventListener('change', ({ target }) => {
    const currentMovies = document.querySelectorAll('.movie');

    if (/[а-яА-Я]/.test(target.value)) {
      translate(target.value)
        .then((word) => {
          currentMovies.forEach((el) => el.remove());
          next = getMovies(word, currentMovies);
          next();
        });
    } else {
      currentMovies.forEach((el) => el.remove());
      next = getMovies(target.value, currentMovies);
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

  const movies = document.querySelector('.movies-block');

  movies.addEventListener('mousedown', startSwipe);
  movies.addEventListener('mouseup', (event) => {
    checkMovies(next);
    runSwipe(event);
  });

  movies.addEventListener('touchstart', (event) => {
    checkMovies(next);
    startTouchSwipe(event);
  });
  movies.addEventListener('touchmove', (event) => {
    event.preventDefault();
  });
  movies.addEventListener('touchend', (event) => {
    checkMovies(next);
    runTouchSwipe(event);
  });
};
