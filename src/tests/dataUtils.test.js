const { filterData, getAvailableOptions } = require('../utils/dataUtils');

const sampleData = [
  { number: 1, mod350: 0, mod8000: 1, mod20002: 2 },
  { number: 2, mod350: 1, mod8000: 2, mod20002: 3 },
  { number: 3, mod350: 0, mod8000: 1, mod20002: 3 },
  { number: 4, mod350: 1, mod8000: 3, mod20002: 2 },
];

describe('filterData()', () => {
  it('returns all data if no filters are applied', () => {
    const filters = { mod350: [], mod8000: [], mod20002: [] };
    const result = filterData(sampleData, filters);
    expect(result).toEqual(sampleData);
  });

  it('filters based on one column', () => {
    const filters = { mod350: [0], mod8000: [], mod20002: [] };
    const result = filterData(sampleData, filters);
    expect(result).toEqual([
      { number: 1, mod350: 0, mod8000: 1, mod20002: 2 },
      { number: 3, mod350: 0, mod8000: 1, mod20002: 3 },
    ]);
  });

  it('filters based on multiple columns', () => {
    const filters = { mod350: [1], mod8000: [2], mod20002: [] };
    const result = filterData(sampleData, filters);
    expect(result).toEqual([
      { number: 2, mod350: 1, mod8000: 2, mod20002: 3 },
    ]);
  });
});

describe('getAvailableOptions()', () => {
  it('returns all unique options for each column', () => {
    const filters = { mod350: [], mod8000: [], mod20002: [] };
    const result = getAvailableOptions(sampleData, filters);
    expect(result).toEqual({
      mod350: [0, 1],
      mod8000: [1, 2, 3],
      mod20002: [2, 3],
    });
  });

  it('respects filters on other columns when calculating options', () => {
    const filters = { mod350: [0], mod8000: [], mod20002: [] };
    const result = getAvailableOptions(sampleData, filters);
    expect(result).toEqual({
      mod350: [0,1],
      mod8000: [1],
      mod20002: [2, 3],
    });
  });
});
