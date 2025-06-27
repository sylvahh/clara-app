import { expect } from 'chai';
import { describe, it } from 'mocha';
import testLib from './testUtils';

describe('testing movie resource', () => {
  it('/movie - should successfully list all movies', (done) => {
    testLib.movies.list().then((res) => {
      expect(res.total).to.be.a('number');
      expect(res.total).to.equal(8);
      expect(res.docs).to.be.a('array');
      expect(res.docs.length).to.equal(8);
      expect(res.limit).to.be.a('number');
      expect(res.offset).to.be.a('number');
      done();
    }).catch(done);
  });
  it('/movie/{id} - should successfully return a movie if a corret id is given', (done) => {
    testLib.movies.get('5cd95395de30eff6ebccde5d').then((res) => {
      expect(res.docs).length.to.be.greaterThan(0);
      expect(res.total).to.equal(1);
      done();
    });
  });
  it('/movie/{id} - should successfully return all quotest if a corret movie id is given', (done) => {
    testLib.movies.allQuotes('5cd95395de30eff6ebccde5d').then((res) => {
      expect(res.total).to.equal(873);
      done();
    }).catch(done);
  });
});
