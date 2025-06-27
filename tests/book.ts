import { expect } from 'chai';
import { describe, it } from 'mocha';
import testLib from './testUtils';

describe('testing books resource', () => {
  it('/book - should successfully list all books', (done) => {
    testLib.books.list().then((res) => {
      expect(res.total).to.be.a('number');
      expect(res.docs).to.be.a('array');
      expect(res.limit).to.be.a('number');
      expect(res.offset).to.be.a('number');
      done();
    }).catch(done);
  });

  it('/book/{id} - should return no books if an invalid book id is supplied', (done) => {
    testLib.books.get('fakebookid:)').then((res) => {
      expect(res.total).to.equal(0);
      expect(res.docs.length).to.equal(0);
      done();
    }).catch(done);
  });

  it('/book/{id} - should return an error if an invalid book id is supplied', (done) => {
    testLib.books.get('invalid_book_id').then((res) => {
      expect(res.success).to.equal(false);
      expect(res.message).to.equal('Something went wrong.');
      done();
    }).catch(done);
  });

  it('/book/{id} - should successfully return a book if a valid id is supplied', (done) => {
    testLib.books.get('5cf5805fb53e011a64671582').then((res) => {
      expect(res.docs).length.to.be.greaterThan(0);
      expect(res.total).to.equal(1);
      done();
    }).catch(done);
  });

  it('/book/{id}/chapter - should return an error if an invalid book id is supplied', (done) => {
    testLib.books.allChapters('fakebookid:)').then((res) => {
      expect(res.total).to.equal(0);
      expect(res.docs.length).to.equal(0);
      done();
    }).catch(done);
  });

  it('/book/{id}/chapter - should return an all chapters if a valid book id is supplied', (done) => {
    testLib.books.allChapters('5cf5805fb53e011a64671582').then((res) => {
      expect(res.docs).length.to.be.greaterThan(1);
      expect(res.docs.length).to.equal(22);
      expect(res.total).to.equal(22);
      done();
    }).catch(done);
  });
});
