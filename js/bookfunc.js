class BookFunc {
  constructor() {
    this.myLibrary = [];
  }

    addBookToLibrary = (book) => {
      book.id = this.myLibrary.length;
      this.myLibrary.push(book);
    };

    getBooksInLibrary = () => this.myLibrary

    deleteBookFromLibrary = (i) => {
      this.myLibrary.splice(i, 1);
    };

    updateStatus = (i) => {
      this.myLibrary[i].isRead = true;
    };
}