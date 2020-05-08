function checkMovies(next) {
  const state = [...document.querySelectorAll('.movie')].filter((node) => !node.classList.contains('hidden'));
  if (state.length < 5) {
    next();
  }
}

let isEnabled = true;

function prevMovie(next) {
  const movies = document.querySelectorAll('.movie');
  const countHidden = [...movies].filter((el) => el.classList.contains('hidden'));

  if (isEnabled && movies.length > countHidden.length) {
    isEnabled = false;
    movies.forEach((node) => {
      node.classList.add('to-left');
    });
    movies[countHidden.length].onanimationend = () => {
      movies[countHidden.length].classList.add('hidden');
      movies.forEach((node) => {
        node.classList.remove('to-left');
      });
      checkMovies(next);
      isEnabled = true;
    };
  }
}

function nextMovie(next) {
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
      checkMovies(next);
      isEnabled = true;
    };
  }
}

let startX;

function startSwipe(event) {
  startX = event.clientX;
  event.preventDefault();
}

function runSwipe(event, next) {
  const distance = Math.abs(startX - event.clientX);
  if (distance > 50) {
    if (startX > event.clientX) {
      prevMovie(next);
    }
    if (startX < event.clientX) {
      nextMovie(next);
    }
  }
  event.preventDefault();
}

function startTouchSwipe(event, next) {
  if (event.target.classList.contains('arrow-left')) {
    prevMovie(next);
  }
  if (event.target.classList.contains('arrow-right')) {
    nextMovie(next);
  }
  startX = event.changedTouches[0].clientX;
  // event.preventDefault();
}

function runTouchSwipe(event, next) {
  const endX = event.changedTouches[0].clientX;
  const distance = Math.abs(startX - endX);
  if (distance > 50) {
    if (startX > endX) {
      prevMovie(next);
    }
    if (startX < endX) {
      nextMovie(next);
    }
  }
  event.preventDefault();
}

module.exports = {
  prevMovie,
  nextMovie,
  startSwipe,
  runSwipe,
  startTouchSwipe,
  runTouchSwipe,
};
