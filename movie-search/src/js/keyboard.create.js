function create(elem, clname, clname2) {
  const n = document.createElement(elem);
  if (clname2) {
    n.classList.add(clname2);
  }
  n.classList.add(clname);
  return n;
}

function drawRow(row, position, attach) {
  for (let i = 0; i < position.length; i += 1) {
    const dbutt = create('div', 'button');
    dbutt.classList.add(`${row[i]}`);
    attach.append(dbutt);
    if (row[i] === 'Backspace' || row[i] === 'Tab' || row[i] === 'CapsLock' || row[i] === 'Enter' || row[i] === 'ShiftLeft' || row[i] === 'ShiftRight' || row[i] === 'ArrowUp' || row[i] === 'ControlLeft' || row[i] === 'MetaLeft' || row[i] === 'AltLeft' || row[i] === 'Space' || row[i] === 'AltRight' || row[i] === 'ArrowLeft' || row[i] === 'ArrowDown' || row[i] === 'ArrowRight' || row[i] === 'ControlRight') {
      const span = create('span', 'word');
      if (position[i] === ' ') { span.classList.add('\\'); } else { span.classList.add(`${position[i]}`); }
      span.innerHTML = position[i];
      if (row[i] === 'MetaLeft') {
        span.innerHTML = '';
        const img = document.createElement('img');
        img.setAttribute('src', './src/assets/img/lang.png');
        img.setAttribute('class', 'event-none lang-earth');
        dbutt.prepend(img);
      }
      if (row[i] === 'Enter') { span.classList.add('virtual-enter'); }
      dbutt.append(span);
    } else {
      for (let j = 0; j < position[i].length; j += 1) {
        const span = create('span', `${position[i][j]}`);
        if (j === 0) {
          span.classList.add('up');
          span.classList.add('hidden');
        } else { span.classList.add('down'); }
        span.innerHTML = position[i][j];
        dbutt.append(span);
      }
    }
  }
}

function runRow(row, num, main) {
  const div = create('div', 'row');
  main.append(div);
  drawRow(row, num, div);
}

module.exports = {
  drawRow,
  create,
  runRow,
};
