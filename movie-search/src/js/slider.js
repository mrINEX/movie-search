let isEnabled = true;

function prevMovie() {
  const movies = document.querySelectorAll('.movie');
  const countHidden = [...movies].filter((el) => el.classList.contains('hidden'));

  if (isEnabled) {
    isEnabled = false;
    movies.forEach((node) => {
      node.classList.add('to-left');
    });
    movies[countHidden.length].onanimationend = () => {
      movies[countHidden.length].classList.add('hidden');
      movies.forEach((node) => {
        node.classList.remove('to-left');
      });
      isEnabled = true;
    };
  }
}

function nextMovie() {
  const movies = document.querySelectorAll('.movie');
  const countHidden = [...movies].filter((el) => el.classList.contains('hidden'));

  if (isEnabled && countHidden.length > 0) {
    isEnabled = false;
    movies[countHidden.length - 1].classList.remove('hidden');

    movies.forEach((node) => {
      node.classList.add('from-left');
    });
    movies[countHidden.length - 1].onanimationend = () => {
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

function startTouchSwipe(event) {
  if (event.target.classList.contains('arrow-left')) {
    prevMovie();
  }
  if (event.target.classList.contains('arrow-right')) {
    nextMovie();
  }
  startX = event.changedTouches[0].clientX;
  event.preventDefault();
}

function runTouchSwipe(event) {
  const endX = event.changedTouches[0].clientX;
  const distance = Math.abs(startX - endX);
  if (distance > 50) {
    if (startX > endX) {
      prevMovie();
    }
    if (startX < endX) {
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
  startTouchSwipe,
  runTouchSwipe,
};
