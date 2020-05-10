const index = require('./index.js');
const create = require('./js/create');
const { getMovies } = require('./js/OMBd');

describe('tests', () => {
  it('should return defined:', () => {
    expect(index).toBeDefined();
  });
  it('should return create:', () => {
    expect(create.createElement('span', {
      classList: ['testing-span'],
    })).toBeInstanceOf(HTMLSpanElement);
  });
  it('should return movie:', () => {
    expect(getMovies('dream')).toBeInstanceOf(Function);
  });
});
