const first = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], 'Backspace'];
const second = [['Tab'], ['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'], ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\\\']];
const third = [['CapsLock'], ['A', 'a'], ['S', 's'], ['D', 'd'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['"', "'"], ['Enter']];
const fourth = [['Shift'], ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'], ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/'], ['&#8593;'], ['Shift']];
const fifth = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'];

const ru1 = [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\', '/'], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], ['я', 'Я'], ['ч', 'Ч'], ['с', 'С'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ',']];
const en1 = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], ['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'], ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\'], ['A', 'a'], ['S', 's'], ['D', 'd'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['"', "'"], ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'], ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/']];

const row1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const row2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const row3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const row4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const row5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const { create, runRow } = require('./keyboard.create');

const keyboard = create('div', 'keyboard-wrapper', 'hidden');
document.querySelector('.search-block').after(keyboard);
const main = create('main', 'keyboard');
keyboard.append(main);

runRow(row1, first, main);
runRow(row2, second, main);
runRow(row3, third, main);
runRow(row4, fourth, main);
runRow(row5, fifth, main);

const upperCharts = document.querySelectorAll('.up');
const downCharts = document.querySelectorAll('.down');
const textarea = document.querySelector('.input-search');
const lang = localStorage.getItem('lang');

if (lang === 'ru') {
  for (let i = 0; i < upperCharts.length; i += 1) {
    upperCharts[i].innerHTML = `${ru1[i][1]}`;
    downCharts[i].innerHTML = `${ru1[i][0]}`;
  }
} else {
  for (let i = 0; i < upperCharts.length; i += 1) {
    upperCharts[i].innerHTML = `${en1[i][0]}`;
    downCharts[i].innerHTML = `${en1[i][1]}`;
  }
}

document.addEventListener('keydown', (event) => {
  document.querySelector('.input-search').focus();
  document.querySelector(`.${event.code}`).classList.add('keyboard-code-active');
  if (event.altKey && event.shiftKey) {
    if (upperCharts[0].innerHTML === 'Ё') {
      for (let i = 0; i < upperCharts.length; i += 1) {
        upperCharts[i].innerHTML = `${en1[i][0]}`;
        downCharts[i].innerHTML = `${en1[i][1]}`;
      }
      localStorage.setItem('lang', 'en');
    } else {
      for (let i = 0; i < upperCharts.length; i += 1) {
        upperCharts[i].innerHTML = `${ru1[i][1]}`;
        downCharts[i].innerHTML = `${ru1[i][0]}`;
      }
      localStorage.setItem('lang', 'ru');
    }
  }
});

document.addEventListener('keyup', (event) => {
  document.querySelector(`.${event.code}`).classList.remove('keyboard-code-active');
});

document.querySelector('.keyboard').addEventListener('mousedown', ({ target }) => {
  event.preventDefault();
  if (target.parentNode.classList.contains('button')) {
    document.querySelector(`.${target.parentNode.classList[1]}`).classList.add('keyboard-code-active');

    if (target.innerHTML === 'Backspace') {
      if (textarea.selectionStart !== textarea.selectionEnd) {
        textarea.setRangeText('', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
      } else {
        textarea.setRangeText('', [textarea.selectionStart - 1], [textarea.selectionEnd], ['end']);
      }
    } else if (target.id === ' ') {
      textarea.setRangeText(' ', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
    } else if (target.innerHTML === 'Tab') {
      textarea.setRangeText('  ', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
    } else if (target.classList.contains('&#8593;') || target.classList.contains('&#8595;')) {
      textarea.setRangeText('', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
    } else if (target.classList.contains('&#8592;')) {
      if (textarea.selectionStart === textarea.selectionEnd) {
        textarea.selectionStart -= 1;
        textarea.selectionEnd -= 1;
      } else {
        textarea.selectionEnd = textarea.selectionStart;
      }
    } else if (target.classList.contains('&#8594;')) {
      if (textarea.selectionStart === textarea.selectionEnd) {
        textarea.selectionEnd += 1;
        textarea.selectionStart += 1;
      } else {
        textarea.selectionStart = textarea.selectionEnd;
      }
    } else if (target.classList.contains('Win')) {
      if (upperCharts[0].innerHTML === 'Ё') {
        for (let i = 0; i < upperCharts.length; i += 1) {
          upperCharts[i].innerHTML = `${en1[i][0]}`;
          downCharts[i].innerHTML = `${en1[i][1]}`;
        }
        localStorage.setItem('lang', 'en');
      } else {
        for (let i = 0; i < upperCharts.length; i += 1) {
          upperCharts[i].innerHTML = `${ru1[i][1]}`;
          downCharts[i].innerHTML = `${ru1[i][0]}`;
        }
        localStorage.setItem('lang', 'ru');
      }
    } else if (target.innerHTML === 'CapsLock') {
      if (target.classList.contains('active-capslock')) {
        target.classList.remove('active-capslock');
        upperCharts.forEach((node) => node.classList.add('hidden'));
        downCharts.forEach((node) => node.classList.remove('hidden'));
      } else {
        upperCharts.forEach((node) => node.classList.remove('hidden'));
        downCharts.forEach((node) => node.classList.add('hidden'));
        target.classList.add('active-capslock');
      }
    } else if (target.innerHTML !== 'Shift' && target.innerHTML !== 'Enter' && target.innerHTML !== 'Ctrl' && target.innerHTML !== 'Alt') {
      textarea.setRangeText(target.textContent, [textarea.selectionStart], [textarea.selectionEnd], ['end']);
    }
  }
});

document.querySelector('.keyboard').addEventListener('mouseup', ({ target }) => {
  event.preventDefault();
  if (target.parentNode.classList.contains('button')) {
    document.querySelector(`.${target.parentNode.classList[1]}`).classList.remove('keyboard-code-active');
  }
});
