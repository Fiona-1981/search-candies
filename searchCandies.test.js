const candies = require('./searchCandies')

describe('searchCandies', () => {
  it('returns Mars and Maltesers', () => {
    expect(searchCandies('Ma', 10)).toBe([ 'Mars', 'Maltesers' ]);
  }) ;
});