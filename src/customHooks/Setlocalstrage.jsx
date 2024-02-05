const booksString = localStorage.getItem('books');
const booksJson = JSON.parse(booksString)

export const Addbooks = (newBook) => {

  const formattedNewBook = {
    ...newBook,
    readDay: new Date(),
    note: ''
  }

  if(booksJson){
    booksJson.push(formattedNewBook);
    localStorage.setItem('books', JSON.stringify(booksJson))
  } else {
    let firstBookData = []
    firstBookData.push(formattedNewBook)
    localStorage.setItem('books', JSON.stringify(firstBookData))
  }
}

export const fixBooks = (newBook, id) => {
  const formattedNewBook = {
    ...booksJson[id],
    ...newBook
  }
  booksJson[id] = formattedNewBook;
  localStorage.setItem('books', JSON.stringify(booksJson))
}