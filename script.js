const saveBtn = document.querySelector('#btnSave');
let newBook;
let tableFunc;

const toggleBook = (e) => {
    if (e.target.textContent === 'Not Read') {
        e.target.textContent = 'Read';
        newBook.updateStatus([e.target.dataset.id]);
    }
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
            isRead: this.isRead
        };
    }

    updateIsRead = () => {
        this.isRead = true
    }

    /**
     * @param {number} id
     */
    set setBookId(id) {
        this.id = id
    }
};

const TableFunc = () => {
    const tableHead = (title, author, pages) => {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const thTitle = document.createElement('th');
        const thAuthor = document.createElement('th');
        const thPages = document.createElement('th');
        const thBtn = document.createElement('th');
        const thBtnRead = document.createElement('th');

        thTitle.textContent = title;
        thAuthor.textContent = author;
        thPages.textContent = pages;
        thBtn.textContent = '';
        thBtnRead.textContent = '';

        tr.append(thTitle, thAuthor, thPages, thBtn, thBtnRead);
        thead.appendChild(tr);

        return thead;
    };

    const deleteBook = (e) => {
        newBook.deleteBookFromLibrary(e.target.dataset.id);
        const table = document.querySelector('.table');
        table.remove();
        displayBooks();
    };

    const tableRow = (i) => {
        const btnClass = ['btn', 'btn-danger'];
        const readBtnClass = ['btn', 'btn-success'];

        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdAuthor = document.createElement('td');
        const tdPages = document.createElement('td');
        const tdBtn = document.createElement('td');
        const tdBtnRead = document.createElement('td');
        const removeBtn = document.createElement('button');
        const readBtn = document.createElement('button');

        const myLibrary = newBook.getBooksInLibrary();

        tdTitle.textContent = myLibrary[i].title;
        tdAuthor.textContent = myLibrary[i].author;
        tdPages.textContent = myLibrary[i].pages;

        removeBtn.textContent = 'Remove';
        removeBtn.classList.add(...btnClass);
        removeBtn.setAttribute('data-id', `${i}`);
        removeBtn.addEventListener('click', deleteBook);
        tdBtn.appendChild(removeBtn);

        if (myLibrary[i].isRead) {
            readBtn.textContent = 'Read';
        } else {
            readBtn.textContent = 'Not Read';
        }
        readBtn.classList.add(...readBtnClass);
        readBtn.setAttribute('data-id', `${i}`);
        readBtn.addEventListener('click', toggleBook);
        tdBtnRead.appendChild(readBtn);

        tr.append(tdTitle, tdAuthor, tdPages, tdBtn, tdBtnRead);

        return tr;
    };

    return { tableHead, tableRow };
};

class BookFunc {

    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary = (book) => {
        this.myLibrary.push(book);
    };

    getBooksInLibrary = () => myLibrary;

    deleteBookFromLibrary = (i) => {
        myLibrary.splice(i, 1);
    };

    updateStatus = (i) => {
        myLibrary[i].isRead = true;
    };
};

// eslint-disable-next-line no-undef
$('#exampleModal').on('hidden.bs.modal', function reset() {
    // eslint-disable-next-line no-undef
    $(this).find('form').trigger('reset');
});

const displayBooks = () => {
    const container = document.querySelector('#container');
    const table = document.createElement('table');
    table.classList.add('table');
    const tHead = tableFunc.tableHead('Title', 'Author', 'Pages');
    const tbody = document.createElement('tbody');
    const myLibrary = newBook.getBooksInLibrary();

    for (let i = 0; i < myLibrary.length; i += 1) {
        tbody.appendChild(tableFunc.tableRow(i));
    }

    table.appendChild(tHead);
    table.appendChild(tbody);
    container.appendChild(table);
};

saveBtn.addEventListener('click', () => {
    const bookForm = document.querySelector('.book-form');
    const author = bookForm.querySelector('#author');
    const title = bookForm.querySelector('#title');
    const pages = bookForm.querySelector('#pages');

    const book = Book(title.value, author.value, pages.value);

    newBook.addBookToLibrary(book);
    // eslint-disable-next-line no-undef
    $('#exampleModal').modal('hide');
    document.querySelector('.table').remove();
    displayBooks();
});

newBook = BookFunc();
tableFunc = TableFunc();

displayBooks();