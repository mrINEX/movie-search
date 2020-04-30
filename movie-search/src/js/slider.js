let current = 0;
let isEnabled = true;

function prevMovie() {
  const movies = document.querySelectorAll('.movie');

  if (isEnabled) {
    isEnabled = false;
    movies.forEach((node) => {
      node.classList.add('to-left');
    });
    movies[current].onanimationend = () => {
      movies[current].classList.add('hidden');
      current += 1;
      movies.forEach((node) => {
        node.classList.remove('to-left');
      });
      isEnabled = true;
    };
  }
}

function nextMovie() {
  const movies = document.querySelectorAll('.movie');

  if (isEnabled && current > 0) {
    isEnabled = false;
    current -= 1;
    movies[current].classList.remove('hidden');

    movies.forEach((node) => {
      node.classList.add('from-left');
    });
    movies[current].onanimationend = () => {
      movies.forEach((node) => {
        node.classList.remove('from-left');
      });
      isEnabled = true;
    };
  }
}

function checkMovies(next) {
  const state = [...document.querySelectorAll('.movie')].filter((node) => !node.classList.contains('hidden'));
  if (state.length === 5) {
    next();
  }
}

let startX;

function startSwipe(event) {
  startX = event.clientX;
  event.preventDefault();
}

function runSwipe(event) {
  const distance = Math.abs(startX - event.clientX);
  if (distance > 50) {
    if (startX > event.clientX) {
      prevMovie();
    }
    if (startX < event.clientX) {
      nextMovie();
    }
  }
  event.preventDefault();
}

module.exports = {
  prevMovie,
  nextMovie,
  checkMovies,
  startSwipe,
  runSwipe,
};
