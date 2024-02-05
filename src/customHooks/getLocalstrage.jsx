const booksString = localStorage.getItem('books');
const booksJson = JSON.parse(booksString);

export const getAllBooks = () => {
  return booksJson;
}

export const getBook = (id) => {
  return booksJson.find((book) => book.id = id)
}

export const getNewId = () => {
  const booksLen = booksJson.length;
  return booksLen+1;
}