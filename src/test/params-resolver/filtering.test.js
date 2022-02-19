const { expect } = require('chai');

let { FilterOptions } = require('../../utils');
let sut = require('../../params-resolver');

describe('validate filtering empty array', () => {
  it('should return an empty string', () => {
    expect(sut({
      filtering: [],
    })).to.equal('');
  })
  ;
});

describe('validate filtering missing key', () => {
  it('should return an empty string', () => {
    expect(sut({
      filtering: [{ type: FilterOptions.GREATER_THAN, value: 200 }],
    })).to.equal('');
  });
});

describe('validate filtering greater than', () => {
  it('should return a valid query param', () => {
    expect(sut({
      filtering: [{ key:'bla', type: FilterOptions.GREATER_THAN, value: 200 }],
    })).to.equal('?bla>200');
  });
});

describe('validate filtering less than or equal and regex ', () => {
  it('should return a valid query param', () => {
    expect(sut({
      filtering: [{ key:'bla', type: FilterOptions.LESS_THAN_OR_EQUAL, value: 200 },{ key:'asd', type: FilterOptions.REGEX, value: 'Aragorn' }],
    })).to.equal('?bla<=200&asd=/Aragorn/i');
  });
});
