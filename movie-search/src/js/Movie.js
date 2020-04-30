const { createElement } = require('./create');

class Movie {
  constructor({
    Title, Poster, Year, imdbRating,
  }) {
    this.title = Title;
    this.poster = Poster;
    this.year = Year;
    this.rating = imdbRating;
  }

  createMovie() {
    const movie = createElement('div', {
      classList: ['movie'],
    });

    const title = createElement('a', {
      classList: ['movie__title'],
      innerText: `${this.title}`,
    });

    const poster = createElement('div', {
      classList: ['movie_image'],
    }, {
      background: `url(${this.poster})`,
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

    document.querySelector('.movies-block').append(movie);
    movie.append(title);
    movie.append(poster);
    movie.append(year);
    movie.append(rating);

    movie.onclick = () => {
      console.log(this.title);
    };
  }
}

module.exports = {
  Movie,
};
