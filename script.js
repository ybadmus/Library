let myLibrary = ['Science of getting rich', 'Napoleon Hill'];

function Book(id, title, author, pages) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = false;
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  const container = document.querySelector('#container');
  const table = document.createElement('table');
  table.classList.add('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  th.textContent = "Name"

  const tbody = document.createElement('tbody');

  for (var i = 0; i < myLibrary.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = myLibrary[i];
    tr.appendChild(td);
    tbody.appendChild(tr);
  };

  container.appendChild(table);
  table.appendChild(thead); 
  thead.appendChild(tr); 
  tr.appendChild(th); 
  table.appendChild(tbody);
}

displayBooks();