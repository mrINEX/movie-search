const { Movie } = require('./Movie');
const { MovieDetails } = require('./Movie.details');

const KEY = '6bf18ca';
const URL_API = 'https://www.omdbapi.com/';

function getMovies(word, isRu) {
  let page = 1;
  let results = 0;
  let allResults = 0;
  return () => {
    document.querySelector('.keyboard-wrapper').classList.add('hidden');
    const message = document.querySelector('.not-finded');
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
                const detailsMovie = new MovieDetails(movie);
                cardMovie.createMovie(detailsMovie.details());
              });
          });
          document.querySelector('.input-search').value = word;
          message.innerHTML = `
            Uploaded <strong>${results} movies</strong> from <strong>${allResults}</strong>.
            Page <strong>#${page - 1}</strong>.
          `;
          if (!isRu) {
            document.querySelector('.notification').textContent = '';
          }
          document.querySelector('.error').textContent = '';
        }
        if (results === 0) {
          document.querySelector('.error').innerHTML = `
            <p style="color: red;">No results for: <strong>"${word}"</strong></p>
          `;
          return false;
        }
        return true;
      }).catch(() => {
        document.querySelector('.error').innerHTML = `
          <p style="color: red;">No results for: <strong>"${word}"</strong></p>
        `;
      });
  };
}

function isNext(response) {
  return response().then((isCorrect) => {
    if (isCorrect) {
      document.querySelectorAll('.movie').forEach((movie) => movie.remove());
      return true;
    }
    return false;
  });
}

module.exports = {
  getMovies,
  isNext,
};
