import { expect } from 'chai';
import { describe, it } from 'mocha';
import testLib from './testUtils';

describe('testing character resource', () => {
  it('/character - should successfully list all characters', (done) => {
    testLib.characters.list().then((res) => {
      expect(res.total).to.be.a('number');
      expect(res.total).to.equal(933);
      expect(res.docs).to.be.a('array');
      expect(res.limit).to.be.a('number');
      expect(res.offset).to.be.a('number');
      done();
    }).catch(done);
  });
  it('/character/{id} - should successfully return a character if a corret id is given', (done) => {
    testLib.characters.get('5cd99d4bde30eff6ebccfc17').then((res) => {
      expect(res.docs).length.to.be.greaterThan(0);
      expect(res.total).to.equal(1);
      done();
    });
  });
  it('/character/{id}/quote - should successfully return a character if a corret id is given', (done) => {
    testLib.characters.get('5cd99d4bde30eff6ebccfc17').then((res) => {
      expect(res.docs).length.to.be.greaterThan(0);
      expect(res.total).to.equal(1);
      done();
    });
  });
});
