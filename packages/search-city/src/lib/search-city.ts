function format(text: string) {
  return text.toLowerCase();
}

export function searchCity(input: string): string[] {
  const results: string[] = [];
  if (input === '*') return cities;
  if (input.length < 2) return results;
  return cities
    .filter((city) => new RegExp(format(input)).test(format(city)))
    .reduce((acc, city) => {
      acc.push(city);
      return acc;
    }, results);
}

export const cities = [
  'Paris',
  'Budapest',
  'Skopje',
  'Rotterdam',
  'Valencia',
  'Vancouver',
  'Amsterdam',
  'Vienna',
  'Sydney',
  'New York City',
  'London',
  'Bangkok',
  'Hong Kong',
  'Dubai',
  'Rome',
  'Istanbul',
];
