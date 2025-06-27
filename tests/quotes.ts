import { expect } from 'chai';
import { describe, it } from 'mocha';
import testLib from './testUtils';

describe('testing quote resource', () => {
  it('/quote - should successfully list all quotes', (done) => {
    testLib.quotes.list().then((res) => {
      expect(res.total).to.be.a('number');
      expect(res.total).to.be.greaterThan(0);
      expect(res.total).to.equal(2390);
      done();
    }).catch(done);
  });
  it('/quote/{id} - should successfully return a quote if a correct id is given', (done) => {
    testLib.quotes.get('5cd96e05de30eff6ebcce84c').then((res) => {
      expect(res.docs).length.to.be.greaterThan(0);
      expect(res.total).to.equal(1);
      done();
    }).catch(done);
  });
});
