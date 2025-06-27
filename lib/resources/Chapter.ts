import LibResource from '../LibResource';

const Chapter = {
  list: () => LibResource.makeRequest({
    method: 'GET',
    path: 'chapter',
    body: null,
  }),
  get: (id: number) => LibResource.makeRequest({
    method: 'GET',
    path: `chapter/${id}`,
    body: null,
  }),
};

export default Chapter;
