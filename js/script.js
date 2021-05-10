const saveBtn = document.querySelector('#btnSave');
let newBook;
let tableFunc;

const displayBooks = () => {
  const container = document.querySelector('#container');
  const table = document.createElement('table');
  table.classList.add('table');
  const tHead = tableFunc.tableHead();
  const tbody = document.createElement('tbody');

  const myLibrary = newBook.getBooksInLibrary();

  for (let i = 0; i < myLibrary.length; i += 1) {
    tbody.appendChild(tableFunc.tableRow(myLibrary[i]));
  }

  table.appendChild(tHead);
  table.appendChild(tbody);
  container.appendChild(table);
};

const toggleBook = (e) => {
  if (e.target.textContent === 'Not Read') {
    e.target.textContent = 'Read';
    newBook.updateStatus(e.target.dataset.id);
    document.querySelector('.table').remove();
    displayBooks();
  }
};

const deleteBook = (e) => {
  newBook.deleteBookFromLibrary(e.target.dataset.id);
  document.querySelector('.table').remove();
  displayBooks();
};

class Book {
    id = 0;

    isRead = false;

    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }

    get book() {
      return {
        id: this.id,
        author: this.author,
        title: this.title,
        pages: this.pages,
        isRead: this.isRead,
      };
    }
}

// eslint-disable-next-line no-undef
$('#exampleModal').on('hidden.bs.modal', function reset() {
  // eslint-disable-next-line no-undef
  $(this).find('form').trigger('reset');
});

saveBtn.addEventListener('click', () => {
  const bookForm = document.querySelector('.book-form');
  const author = bookForm.querySelector('#author');
  const title = bookForm.querySelector('#title');
  const pages = bookForm.querySelector('#pages');

  const book = new Book(title.value, author.value, pages.value);
  newBook.addBookToLibrary(book);

  // eslint-disable-next-line no-undef
  $('#exampleModal').modal('hide');
  document.querySelector('.table').remove();
  displayBooks();
});

newBook = new BookFunc();
tableFunc = new TableFunc('Title', 'Author', 'Pages');

displayBooks();