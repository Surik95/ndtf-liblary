import Book from '../interface/book';
export default abstract class BooksRepository {
  arrBook: Book[];

  //создание книги
  abstract createBook(book: Book): void;

  //получение книги по id
  abstract getBook(id: string): Book | undefined;

  //получение всех книг
  abstract getBooks(): Book[];

  //обновление книги
  abstract updateBook(id: string): void;

  //удаление книги
  abstract deleteBook(id: string): void;
}
