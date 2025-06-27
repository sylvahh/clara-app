import { expect } from 'chai';
import { describe, it } from 'mocha';
import testLib from './testUtils';

describe('testing chapter resource', () => {
  it('/chapter - should successfully list all chapters', (done) => {
    testLib.chapters.list().then((res) => {
      expect(res.total).to.be.a('number');
      expect(res.total).to.equal(62);
      expect(res.docs).to.be.a('array');
      expect(res.docs.length).to.equal(62);
      expect(res.limit).to.be.a('number');
      expect(res.offset).to.be.a('number');
      done();
    }).catch(done);
  });
  it('/chapter/{id} - should successfully return a chapter if a corret id is given', (done) => {
    testLib.chapters.get('6091b6d6d58360f988133bbd').then((res) => {
      expect(res.docs).length.to.be.greaterThan(0);
      expect(res.total).to.equal(1);
      done();
    });
  });
});
