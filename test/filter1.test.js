const { expect } = require('chai');
const getPositiveNumbers = require('../filter/ex1.js');

//xdescribe('filter - exercice 1', () => {
describe('filter - exercice 1', () => {

  it('getPositiveNumbers', () => {
    expect(getPositiveNumbers([7, -4, 2, 0, -10, 3, 11]))
    .to.deep.equal([7, 2, 0, 3, 11]);
  });

});

