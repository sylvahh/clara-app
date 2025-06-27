import LibResource from '../LibResource';

const Book = {
  list: () => LibResource.makeRequest({
    method: 'GET',
    path: 'book',
    body: null,
  }),
  get: (bookId: string) => LibResource.makeRequest({
    method: 'GET',
    path: `book/${bookId}`,
    body: null,
  }),
  allChapters: (bookId: string) => LibResource.makeRequest({
    method: 'GET',
    path: `book/${bookId}/chapter`,
    body: null,
  }),
};

export default Book;
