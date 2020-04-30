const { Movie } = require('./Movie');

const KEY = '6bf18ca';
const URL_API = 'http://www.omdbapi.com/';

function getMovies(word) {
  let page = 1;
  return () => {
    const url = `${URL_API}?s=${word}&page=${page}&apikey=${KEY}`;
    page += 1;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.Search.forEach((node) => {
          fetch(`${URL_API}?i=${node.imdbID}&apikey=${KEY}`)
            .then((res) => res.json())
            .then((movie) => {
              const cardMovie = new Movie(movie);
              cardMovie.createMovie();
            });
        });
      });
  };
}

module.exports = {
  getMovies,
};
