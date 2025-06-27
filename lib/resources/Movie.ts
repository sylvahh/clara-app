import LibResource from '../LibResource';

const Movie = {
  list: () => LibResource.makeRequest({
    method: 'GET',
    path: 'movie',
    body: null,
  }),
  get: (id: number) => LibResource.makeRequest({
    method: 'GET',
    path: `movie/${id}`,
    body: null,
  }),
  allQuotes: (id: number) => LibResource.makeRequest({
    method: 'GET',
    path: `movie/${id}/quote`,
    body: null,
  }),
};

export default Movie;
