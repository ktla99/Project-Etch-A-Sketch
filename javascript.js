const containerOne = document.querySelector('#containerOne');

const row = document.createElement('div');
row.classList.add('row');

const column = document.createElement('div');
column.classList.add('column');

const box = document.createElement('div');
box.classList.add('box');

containerOne.appendChild(row);
containerOne.appendChild(column);
containerOne.appendChild(box);