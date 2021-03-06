class TableFunc {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.thBtn = '';
    this.thBtnRead = '';
  }

    tableHead = () => {
      const thead = document.createElement('thead');
      const tr = document.createElement('tr');
      const thTitle = document.createElement('th');
      const thAuthor = document.createElement('th');
      const thPages = document.createElement('th');
      const thBtn = document.createElement('th');
      const thBtnRead = document.createElement('th');

      thTitle.textContent = this.title;
      thAuthor.textContent = this.author;
      thPages.textContent = this.pages;
      thBtn.textContent = this.thBtn;
      thBtnRead.textContent = this.thBtnRead;

      tr.append(thTitle, thAuthor, thPages, thBtn, thBtnRead);
      thead.appendChild(tr);

      return thead;
    };

    tableRow = (book) => {
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

      tdTitle.textContent = book.title;
      tdAuthor.textContent = book.author;
      tdPages.textContent = book.pages;

      removeBtn.textContent = 'Remove';
      removeBtn.classList.add(...btnClass);
      removeBtn.setAttribute('data-id', `${book.id}`);
      removeBtn.addEventListener('click', deleteBook);
      tdBtn.appendChild(removeBtn);

      if (book.isRead) {
        readBtn.textContent = 'Read';
      } else {
        readBtn.textContent = 'Not Read';
      }

      readBtn.classList.add(...readBtnClass);
      readBtn.setAttribute('data-id', `${book.id}`);
      readBtn.addEventListener('click', toggleBook);
      tdBtnRead.appendChild(readBtn);

      tr.append(tdTitle, tdAuthor, tdPages, tdBtn, tdBtnRead);

      return tr;
    };
}