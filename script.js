const bookForm = document.querySelector('.book-form');
const author = bookForm.querySelector('#author');
const title = bookForm.querySelector('#title');
const pages = bookForm.querySelector('#pages');
const read = bookForm.querySelector('#isRead');

const btnClass = ['btn', 'btn-danger'];
const readBtnClass = ['btn', 'btn-success'];

let myLibrary = [{ bookID: 1, author: 'Peter Thiel', title: 'Zero to One', pages: 186 }];
let newBook;

function Book(id, title, author, pages) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = false;
}

function addBookToLibrary() {
  // do stuff here
  newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.value,
  );

  // Call Display function on new book
}

function displayBooks() {
  const container = document.querySelector('#container');
  const table = document.createElement('table');
  table.classList.add('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const thTitle = document.createElement('th');
  const thAuthor = document.createElement('th');
  const thPages = document.createElement('th');

  const thBtn = document.createElement('th');
  const thBtnRead = document.createElement('th');
  thTitle.textContent = 'Title';
  thAuthor.textContent = 'Author';
  thPages.textContent = 'Pages';

  thBtn.textContent = '';
  thBtnRead.textContent = '';

  const tbody = document.createElement('tbody');

  for (let i = 0; i < myLibrary.length; i += 1) {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdPages = document.createElement('td');
    const tdBtn = document.createElement('td');
    const tdBtnRead = document.createElement('td');

    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    tdTitle.textContent = myLibrary[i].title;
    tdAuthor.textContent = myLibrary[i].author;
    tdPages.textContent = myLibrary[i].pages;
    tdBtn.appendChild(removeBtn);
    tdBtnRead.appendChild(readBtn);
    removeBtn.classList.add(...btnClass);
    readBtn.classList.add(...readBtnClass);
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('data-id', `${i}`);
    readBtn.textContent = 'Read';
    readBtn.setAttribute('data-id', `${i}`);
    tr.append(tdTitle, tdAuthor, tdPages, tdBtn, tdBtnRead);
    tbody.appendChild(tr);
  }

  container.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(tr);
  tr.append(thTitle, thAuthor, thPages, thBtn, thBtnRead);
  table.appendChild(tbody);
}

displayBooks();