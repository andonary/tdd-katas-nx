import { cities, Search } from './search-city';

describe('searchCity', () => {
  const searchCity = (input: string) => new Search(cities).execute(input);

  it('should search city by input', () => {
    expect(searchCity('')).not.toBeDefined();
    expect(searchCity('z')).not.toBeDefined();
    expect(searchCity('Pa')).toEqual(['Paris']);
    expect(searchCity('Va')).toEqual(['Valencia', 'Vancouver']);
    expect(searchCity('pa')).toEqual(['Paris']);
    expect(searchCity('ape')).toEqual(['Budapest']);
    expect(searchCity('*')).toEqual(cities);
  });
});
