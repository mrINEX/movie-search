const { createElement } = require('./create');

class Movie {
  constructor({
    Title, Poster, Year, imdbRating, imdbID,
  }) {
    this.title = Title;
    this.poster = Poster;
    this.year = Year;
    this.rating = imdbRating;
    this.id = imdbID;
  }

  createMovie() {
    const movie = createElement('div', {
      classList: ['movie', 'movie-opacity'],
    });

    const title = createElement('a', {
      classList: ['movie__title'],
      innerText: `${this.title}`,
      href: `https://www.imdb.com/title/${this.id}/`,
    });

    const poster = createElement('div', {
      classList: ['movie_image'],
    });

    const posterImg = createElement('img', {
      src: `${this.poster === 'N/A' ? '../src/assets/img/noposter.jpg' : this.poster}`,
    });

    const year = createElement('span', {
      innerText: `${this.year}`,
    });

    const rating = createElement('div', {
      classList: ['movie__rating'],
      innerHTML: `
        <span class="rating_star"></span>
        <span>${this.rating === 'N/A' ? 'no stars' : this.rating}</span>
      `,
    });

    movie.append(title);
    movie.append(poster);
    poster.append(posterImg);
    movie.append(year);
    movie.append(rating);
    document.querySelector('.movies-block').append(movie);

    posterImg.addEventListener('load', () => {
      document.querySelector('.loader').classList.add('hidden');
      movie.classList.remove('movie-opacity');
    });
  }
}

module.exports = {
  Movie,
};
