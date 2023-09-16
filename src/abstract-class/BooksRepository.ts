import Book from '../interface/book';
export default abstract class BooksRepository {
  arrBook: Book[];

  //создание книги
  createBook(book: Book): void {
    this.arrBook.push(book);
  }

  //получение книги по id
  getBook(id: string): Book | undefined {
    return this.arrBook.find((item) => item.id === id);
  }

  //получение всех книг
  getBooks(): Book[] {
    return this.arrBook;
  }

  //обновление книги
  abstract updateBook(id: string): void;

  //удаление книги
  deleteBook(id: string): void {
    const indexBook: number = this.arrBook.findIndex((item) => item.id === id);
    if (indexBook !== -1) {
      this.arrBook.splice(indexBook, 1);
    }
  }
}
