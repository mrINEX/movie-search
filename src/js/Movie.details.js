const { createElement } = require('./create');

class MovieDetails {
  constructor({
    Actors, Awards, Country, Genre, Plot, Poster, imdbRating,
    Ratings, Released, Title, imdbID, Runtime, Director,
  }) {
    this.actors = Actors;
    this.awards = Awards;
    this.country = Country;
    this.genre = Genre;
    this.plot = Plot;
    this.poster = Poster;
    this.ratings = Ratings;
    this.released = Released;
    this.title = Title;
    this.runtime = Runtime;
    this.director = Director;
    this.id = imdbID;
    this.rating = imdbRating;
  }

  details() {
    return () => {
      const main = document.querySelector('main');

      const detailsWrapper = createElement('div', {
        classList: ['details-wrapper', 'movie-opacity'],
      });

      const imgWrapper = createElement('div', {
        classList: ['details__img'],
      });
      const posterImg = createElement('img', {
        src: `${this.poster === 'N/A' ? '../src/assets/img/noposter.png' : this.poster}`,
      });
      imgWrapper.append(posterImg);

      const detailWrapperLeft = createElement('div', {
        classList: ['movie-detail-left'],
      });
      detailWrapperLeft.append(imgWrapper);

      const detailWrapperRight = createElement('div', {
        classList: ['movie-detail-right'],
      });
      const title = createElement('h2', {
        innerText: `${this.title}`,
      });
      const genreMovie = createElement('div', {
        classList: ['four-column'],
        innerHTML: `
          <strong>${this.genre === 'N/A' ? 'no genre' : this.genre}</strong>
          <strong>${this.released === 'N/A' ? 'no release' : this.released}</strong>
          <strong>${this.country === 'N/A' ? 'no country' : this.country}</strong>
          <strong>${this.runtime === 'N/A' ? 'no time' : this.runtime}</strong>
        `,
      });
      const directorMovie = createElement('p', {
        innerHTML: `<strong>Director:</strong> ${this.director === 'N/A' ? 'no director' : this.director}`,
      });
      const actorsMovie = createElement('p', {
        innerHTML: `<strong>Actors:</strong> ${this.actors === 'N/A' ? 'no actors' : this.actors}`,
      });
      const plotMovie = createElement('p', {
        innerHTML: `<strong>Plot:</strong> ${this.plot === 'N/A' ? 'no plot' : this.plot}`,
      });
      const wrapperAwards = createElement('div', {
        classList: ['wrapper-awards'],
      });
      const awardsMovie = createElement('div', {
        classList: ['movie__rating'],
        innerHTML: `<p><strong>Awards: </strong>${this.awards === 'N/A' ? 'no awards' : this.awards}</p>`,
      });
      const ratingMovie = createElement('div', {
        classList: ['movie__rating'],
        innerHTML: `
          Imdb rating:
          <div class="rating_title">
            <span class="rating_star"></span>
            <span style="align-self: center;">
              ${this.rating === 'N/A' ? 'no stars' : this.rating}
            </span>
          </div>
        `,
      });
      wrapperAwards.append(awardsMovie, ratingMovie);
      this.ratings.forEach((node) => {
        const otherRatings = createElement('div', {
          classList: ['movie__rating'],
          innerHTML: `
          ${node.Source}:
          <div class="rating_title">
            <span class="rating_star"></span>
            <span style="align-self: center;">
              ${node.Value === 'N/A' ? 'no stars' : node.Value}
            </span>
          <div>
        `,
        });
        wrapperAwards.append(otherRatings);
      });

      const close = createElement('button', {
        innerText: 'return',
        classList: ['close-details'],
      });
      detailWrapperRight.append(title, genreMovie, directorMovie, actorsMovie, plotMovie);
      detailWrapperRight.append(wrapperAwards, close);

      const detailWrapperCenter = createElement('div', {
        classList: ['movie-detail-center', 'wrapper'],
      });
      detailWrapperCenter.append(detailWrapperLeft, detailWrapperRight);
      detailsWrapper.append(detailWrapperCenter);

      const del = () => {
        main.classList.remove('event-none', 'half-hidden');
        detailsWrapper.remove();
      };
      close.onclick = del;
      close.ontouchstart = del;
      main.after(detailsWrapper);
      main.classList.add('event-none', 'half-hidden');

      posterImg.addEventListener('load', () => {
        detailsWrapper.classList.remove('movie-opacity');
      });
    };
  }
}

module.exports = {
  MovieDetails,
};
