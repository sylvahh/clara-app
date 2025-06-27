import LibResource from '../LibResource';

const Character = {
  list: () => LibResource.makeRequest({
    method: 'GET',
    path: 'character',
    body: null,
  }),
  get: (id: number) => LibResource.makeRequest({
    method: 'GET',
    path: `character/${id}`,
    body: null,
  }),
  allQuotes: (id: number) => LibResource.makeRequest({
    method: 'GET',
    path: `character/${id}/quote`,
    body: null,
  }),
};

export default Character;
