require('./js/create');
require('./js/OMBd');

window.onload = () => {
  document.querySelector('.arrow-left').addEventListener('click', () => {
    const movies = document.querySelectorAll('.movie');
    movies.forEach((node) => {
      node.classList.add('to-left');
    });
  });
};
