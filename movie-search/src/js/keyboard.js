const first = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], 'Backspace'];
const second = [['Tab'], ['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'], ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\\\']];
const third = [['CapsLock'], ['A', 'a'], ['S', 's'], ['D', 'd'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['"', "'"], ['Enter']];
const fourth = [['Shift'], ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'], ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/'], ['&#8593;'], ['Shift']];
const fifth = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8594;', '&#8595;', '&#8594;', 'Ctrl'];

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
const capsLock = document.querySelector('.CapsLock');
const textarea = document.querySelector('.input-search');
const lang = localStorage.getItem('lang');

// localstorage ------------------------------------------
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

// click case
window.addEventListener('click', ({ target }) => {
  if (target.parentNode.classList.contains('button')) {
    setTimeout(() => {
      target.parentNode.removeAttribute('style');
    }, 200);
    if (target.innerHTML === 'Backspace') {
      textarea.value = textarea.value.replace(/.$|\n$/, '');
    } else if (target.id === ' ') {
      textarea.value += ' ';
    } else if (target.innerHTML === 'Tab') {
      textarea.value += '  ';
    } else if (target.innerHTML !== 'Shift') {
      textarea.value += target.innerHTML;
    }
  }
});

window.addEventListener('keydown', (event) => {
  if (event.shiftKey) {
    if (event.altKey && upperCharts[0].innerHTML === 'Ё') {
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
