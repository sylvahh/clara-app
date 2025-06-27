import LibResource from '../LibResource';

const Quote = {
  list: () => LibResource.makeRequest({
    method: 'GET',
    path: 'quote',
    body: null,
  }),
  get: (id: number) => LibResource.makeRequest({
    method: 'GET',
    path: `quote/${id}`,
    body: null,
  }),
};

export default Quote;
