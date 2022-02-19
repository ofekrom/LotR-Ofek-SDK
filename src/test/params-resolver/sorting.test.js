const { expect } = require('chai');

let sut = require('../../params-resolver');

describe('validate no sorting', () => {
  it('should return an empty string', () => {
    expect(sut({})).to.equal('');
  });
});

describe('validate sorting no key', () => {
  it('should return an empty string', () => {
    expect(sut({ sorting: { type: 'ASC' } })).to.equal('');
  });
});

describe('validate sorting no type', () => {
  it('should return an empty string', () => {
    expect(sut({ sorting: { key: 'bla' } })).to.equal('');
  });
});

describe('validate sorting wrong type', () => {
  it('should return an empty string', () => {
    expect(sut({ sorting: { key: 'bla', type: 'AS' } })).to.equal('');
  });
});

describe('happy path ASC', () => {
  it('should return a valid query param', () => {
    expect(sut({ sorting: { key: 'bla', type: 'ASC' } })).to.equal('?sort=bla:ASC&');
  });
});

describe('happy path DESC', () => {
  it('should return a valid query param', () => {
    expect(sut({ sorting: { key: 'bla', type: 'DESC' } })).to.equal('?sort=bla:DESC&');
  });
});
