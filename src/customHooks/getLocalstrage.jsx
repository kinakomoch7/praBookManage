const booksString = localStorage.getItem('books');
const booksJson = JSON.parse(booksString);

export const getId = () => {
  const id = booksJson.id;
  return id;
}

export const getNewId = () => {
  const booksLen = booksJson.length;
  console.log(booksLen);
  return booksLen+1;
}