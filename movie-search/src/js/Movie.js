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
      classList: ['movie'],
    });

    const title = createElement('a', {
      classList: ['movie__title'],
      innerText: `${this.title}`,
      href: `https://www.imdb.com/title/${this.id}/`,
    });

    const poster = createElement('div', {
      classList: ['movie_image'],
    }, {
      background: `url(${this.poster === 'N/A' ? '../src/assets/img/noposter.jpg' : this.poster})`,
      'background-position': 'center',
      'background-size': 'cover',
    });

    const year = createElement('span', {
      innerText: `${this.year}`,
    });

    const rating = createElement('div', {
      classList: ['movie__rating'],
      innerHTML: `<span class="rating_star"></span><span>${this.rating}</span>`,
    });

    movie.append(title);
    movie.append(poster);
    movie.append(year);
    movie.append(rating);
    document.querySelector('.movies-block').append(movie);

    poster.onload = () => {
      console.log(movie);
    };
  }
}

module.exports = {
  Movie,
};
