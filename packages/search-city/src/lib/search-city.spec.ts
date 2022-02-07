import { searchCity, cities } from './search-city';

describe('searchCity', () => {
  it('should search by cities', () => {
    expect(searchCity('x')).toEqual([]);
    expect(searchCity('P')).toEqual([]);
    expect(searchCity('Paris')).toEqual(['Paris']);
    expect(searchCity('Pa')).toEqual(['Paris']);
    expect(searchCity('Ro')).toEqual(['Rotterdam', 'Rome']);
    expect(searchCity('PARIS')).toEqual(['Paris']);
    expect(searchCity('PA')).toEqual(['Paris']);
    expect(searchCity('ape')).toEqual(['Budapest']);
    expect(searchCity('*')).toEqual(cities);
  });
});
