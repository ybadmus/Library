let myLibrary = ['Science of getting rich', 'Napoleon Hill'];
const btnClass = ['btn', 'btn-danger'];

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
  const thName = document.createElement('th');
  const thBtn = document.createElement('th');
  thName.textContent = "Name";
  thBtn.textContent = "";

  const tbody = document.createElement('tbody');

  for (var i = 0; i < myLibrary.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let tdBtn = document.createElement('td');
    let removeBtn = document.createElement('button');
    td.textContent = myLibrary[i];
    tdBtn.appendChild(removeBtn);
    removeBtn.classList.add(...btnClass);
    removeBtn.textContent = 'Remove';
    tr.appendChild(td);
    tr.appendChild(tdBtn);
    tbody.appendChild(tr);
  };

  container.appendChild(table);
  table.appendChild(thead); 
  thead.appendChild(tr); 
  tr.appendChild(thName);
  tr.appendChild(thBtn);
  table.appendChild(tbody);
}

displayBooks();