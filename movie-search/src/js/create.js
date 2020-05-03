const createElement = (type, attributes = {}, styles = {}) => {
  const elem = document.createElement(type);
  Object.keys(attributes).forEach((key) => {
    if (key === 'classList') {
      elem.classList.add(...attributes[key]);
    } else if (/data-/.test(key)) {
      elem.setAttribute(key, attributes[key]);
    } else {
      elem[key] = attributes[key];
    }
  });
  Object.keys(styles).forEach((key) => {
    elem.style[key] = styles[key];
  });
  return elem;
};

const header = createElement('header', {
  classList: ['header'],
  innerHTML: '<h1>movie search</h1>',
});

const main = createElement('main', {
  classList: ['main', 'wrapper'],
});

const searchBlock = createElement('div', {
  classList: ['search-block'],
});

const inputSearch = createElement('input', {
  placeholder: 'search movie',
  type: 'search',
  classList: ['input-search'],
});

const notFinded = createElement('span', {
  classList: ['not-finded'],
});

const moviesBlock = createElement('div', {
  classList: ['movies-block'],
});

const loader = createElement('div', {
  classList: ['loader'],
});

const arrowLeft = createElement('div', {
  classList: ['arrow-left'],
});

const arrowRight = createElement('div', {
  classList: ['arrow-right'],
});

const footer = createElement('footer', {
  classList: ['footer', 'footer__wrapper'],
});

const footerLeft = createElement('h3', {
  classList: ['footer__quarter'],
  innerText: 'RS School 2020q1',
});

const footerRight = createElement('div', {
  classList: ['footer__github'],
});

const githubIcon = createElement('img', {
  classList: ['github_icon'],
  src: './src/assets/img/github.svg',
});

const githubName = createElement('a', {
  href: 'https://github.com/mrINEX',
  classList: ['github_name'],
  innerHTML: '<h3>mrINEX</h3>',
});

document.querySelector('body').append(header);

document.querySelector('body').append(main);
main.append(searchBlock);
searchBlock.append(inputSearch, notFinded);
main.append(moviesBlock);
moviesBlock.append(loader, arrowLeft, arrowRight);

document.querySelector('body').append(footer);
footer.append(footerLeft, footerRight);
footerRight.append(githubIcon, githubName);

module.exports = {
  createElement,
};
