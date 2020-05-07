require('./js/create');
require('./js/keyboard');
const { translate } = require('./js/translate');
const { getMovies, isNext } = require('./js/OMBd');
const {
  prevMovie, nextMovie, startSwipe, runSwipe, startTouchSwipe, runTouchSwipe,
} = require('./js/slider');

window.onload = () => {
  let next = getMovies('age');
  next();
  const input = document.querySelector('.input-search');
  let storageValue = input.value;
  let response;

  input.addEventListener('blur', () => {
    if (!document.querySelector('.keyboard-wrapper').classList.contains('hidden') && storageValue !== input.value) {
      if (/[а-яА-Я]/.test(input.value)) {
        translate(input.value).then((word) => {
          response = getMovies(word);
          isNext(response).then((value) => { if (value) { next = response; } });
        });
      } else {
        response = getMovies(input.value);
        isNext(response).then((value) => { if (value) { next = response; } });
      }
    } else {
      document.querySelector('.keyboard-wrapper').classList.add('hidden');
    }
    storageValue = input.value;
  });

  document.addEventListener('keydown', ({ code }) => {
    if (code === 'Enter') {
      const isHide = document.querySelector('.keyboard-wrapper').classList.contains('hidden');
      if (storageValue !== input.value && !isHide) {
        if (/[а-яА-Я]/.test(input.value)) {
          translate(input.value).then((word) => {
            response = getMovies(word);
            isNext(response).then((value) => { if (value) { next = response; } });
          });
        } else {
          response = getMovies(input.value);
          isNext(response).then((value) => { if (value) { next = response; } });
        }
      } else {
        document.querySelector('.keyboard-wrapper').classList.add('hidden');
      }
      storageValue = input.value;
    }
  });

  input.addEventListener('change', ({ target }) => {
    if (/[а-яА-Я]/.test(target.value)) {
      translate(target.value).then((word) => {
        response = getMovies(word);
        isNext(response).then((value) => { if (value) { next = response; } });
      });
    } else {
      response = getMovies(target.value);
      isNext(response).then((value) => { if (value) { next = response; } });
    }
  });

  document.querySelector('.virtual-enter').addEventListener('click', () => {
    if (/[а-яА-Я]/.test(input.value)) {
      translate(input.value).then((word) => {
        response = getMovies(word);
        isNext(response).then((value) => { if (value) { next = response; } });
      });
    } else {
      response = getMovies(input.value);
      isNext(response).then((value) => { if (value) { next = response; } });
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
