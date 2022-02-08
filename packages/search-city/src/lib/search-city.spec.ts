import { searchCity, cities } from './search-city';

describe('searchCity', () => {
  it('should search cities', () => {
    expect(searchCity('')).toEqual([]);
    expect(searchCity('P')).toEqual([]);
    expect(searchCity('Pa')).toEqual([{ name: 'Paris' }]);
    expect(searchCity('Va')).toEqual([
      { name: 'Valencia' },
      { name: 'Vancouver' },
    ]);
    expect(searchCity('pa')).toEqual([{ name: 'Paris' }]);
    expect(searchCity('ape')).toEqual([{ name: 'Budapest' }]);
    expect(searchCity('*')).toEqual(cities.map((name) => ({ name })));
  });
});
