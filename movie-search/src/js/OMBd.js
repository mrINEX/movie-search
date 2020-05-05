const { Movie } = require('./Movie');
const { translate } = require('./translate');

const KEY = '6bf18ca';
const URL_API = 'http://www.omdbapi.com/';

function getMovies(word) {
  let page = 1;
  let results = 0;
  let allResults = 0;
  return () => {
    const message = document.querySelector('.not-finded');
    document.querySelector('.keyboard-wrapper').classList.add('hidden');
    const url = `${URL_API}?s=${word}&page=${page}&apikey=${KEY}`;
    page += 1;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          document.querySelector('.loader').classList.remove('hidden');
          results += data.Search.length;
          allResults = data.totalResults;
          data.Search.forEach((node) => {
            fetch(`${URL_API}?i=${node.imdbID}&apikey=${KEY}`)
              .then((res) => res.json())
              .then((movie) => {
                const cardMovie = new Movie(movie);
                cardMovie.createMovie();
              });
          });
          document.querySelector('.input-search').value = word;
          const notification = document.querySelector('.notification');
          if (notification.children.length === 1) {
            notification.textContent = '';
          }
          message.innerHTML = `
            Uploaded <strong>${results} movies</strong> from <strong>${allResults}</strong>.
            Page <strong>#${page - 1}</strong>.
          `;
        }
        if (results === 0) {
          document.querySelector('.notification').innerHTML = `
            <p style="color: red;">No results for: <strong>"${word}"</strong></p>
          `;
          return false;
        }
        return true;
      }).catch(() => {
        document.querySelector('.notification').innerHTML = `
          <p style="color: red;">No results for: <strong>"${word}"</strong></p>
        `;
      });
  };
}

let response;
let next = getMovies('dark');
next();

function findMovies(text) {
  if (/[а-яА-Я]/.test(text)) {
    translate(text).then((word) => {
      response = getMovies(word);
      response().then((isCorrect) => {
        if (isCorrect) {
          document.querySelectorAll('.movie').forEach((movie) => movie.remove());
          next = response;
        }
      });
    });
  } else {
    response = getMovies(text);
    response().then((isCorrect) => {
      if (isCorrect) {
        document.querySelectorAll('.movie').forEach((movie) => movie.remove());
        next = response;
      }
    });
  }
}

module.exports = {
  next,
  findMovies,
};
