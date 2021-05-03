const bookForm = document.querySelector('.book-form');
const author = bookForm.querySelector('#author');
const title = bookForm.querySelector('#title');
const pages = bookForm.querySelector('#pages');
const read = bookForm.querySelector('#isRead');

const btnClass = ['btn', 'btn-danger'];
const readBtnClass = ['btn', 'btn-success'];

let myLibrary = [];
let newBook;
let bookIds = 0;

function Book(id, title, author, pages) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = false;
}

function addBookToLibrary() {
  newBook = new Book();
  bookIds += 1;
  newBook.id = bookIds;
  newBook.title = title.value;
  newBook.author = author.value;
  newBook.pages = pages.value;
}

function toggle(e) {
  if (e.target.textContent === 'Not Read') {
    e.target.textContent = 'Read';
    myLibrary[e.target.dataset.id].isRead = true;
  } else {
    myLibrary[e.target.dataset.id].isRead = false;
  }
}

function tableRow() {
  const tr = document.createElement('tr');
  const tdTitle = document.createElement('td');
  const tdAuthor = document.createElement('td');
  const tdPages = document.createElement('td');
  const tdBtn = document.createElement('td');
  const tdBtnRead = document.createElement('td');

  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');

  return {
    tr,
    tdTitle,
    tdAuthor,
    tdPages,
    tdBtn,
    tdBtnRead,
    removeBtn,
    readBtn,
  };
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
    const table = tableRow();

    table.tdTitle.textContent = myLibrary[i].title;
    table.tdAuthor.textContent = myLibrary[i].author;
    table.tdPages.textContent = myLibrary[i].pages;
    table.tdBtn.appendChild(table.removeBtn);
    table.tdBtnRead.appendChild(table.readBtn);
    table.removeBtn.classList.add(...btnClass);
    table.readBtn.classList.add(...readBtnClass);
    table.removeBtn.textContent = 'Remove';
    table.removeBtn.setAttribute('data-id', `${i}`);
    if (myLibrary[i].isRead) {
      table.readBtn.textContent = 'Read';
    } else {
      table.readBtn.textContent = 'Not Read';
    }
    table.readBtn.setAttribute('data-id', `${i}`);
    table.readBtn.addEventListener('click', toggle);
    table.removeBtn.addEventListener('click', (e) => {
      myLibrary.splice(e.target.dataset.id, 1);
      const table = document.querySelector('.table');
      table.remove();
      displayBooks();
    });
    table.tr.append(table.tdTitle, table.tdAuthor, table.tdPages, table.tdBtn, table.tdBtnRead);
    tbody.appendChild(table.tr);
  }

  container.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(tr);
  tr.append(thTitle, thAuthor, thPages, thBtn, thBtnRead);
  table.appendChild(tbody);
}

const saveBtn = document.querySelector('#btnSave');

saveBtn.addEventListener('click', () => {
  addBookToLibrary();
  myLibrary.push(newBook);
  $('#exampleModal').modal('hide');
  const table = document.querySelector('.table');
  table.remove();

  $('#exampleModal').on('hidden.bs.modal', function() {
    $(this).find('form').trigger('reset');
  });

  displayBooks();
});

displayBooks();