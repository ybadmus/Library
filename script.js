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
    newBook = new Book(
        title.value,
        author.value,
        pages.value,
        read.value,
    );
}

function toggle(e) {
    if (e.target.textContent = 'Not Read') {
        e.target.textContent = 'Read';
        myLibrary[e.target.dataset.id].isRead = true;
    }
}


function removeBook(e) {
    myLibrary.splice(e.target.dataset.id, 1);
    const table = document.querySelector('.table');
    table.remove();
    displayBooks()
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
        if (myLibrary[i].isRead)
            readBtn.textContent = 'Read';
        else
            readBtn.textContent = 'Not Read';
        readBtn.setAttribute('data-id', `${i}`);
        readBtn.addEventListener('click', toggle);
        removeBtn.addEventListener('click', removeBook);
        tr.append(tdTitle, tdAuthor, tdPages, tdBtn, tdBtnRead);
        tbody.appendChild(tr);
    }

    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    tr.append(thTitle, thAuthor, thPages, thBtn, thBtnRead);
    table.appendChild(tbody);
}

const saveBtn = document.querySelector('#btnSave');

saveBtn.addEventListener('click', event => {
    let newBook = new Book();
    bookIds += 1;
    newBook.id = bookIds;
    newBook.author = document.querySelector('#author').value;
    newBook.title = document.querySelector('#title').value;
    newBook.pages = document.querySelector('#pages').value;

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