function createResult(city: string = '') {
  return { name: city };
}

function format(city: string) {
  return city.toLowerCase();
}

export function searchCity(input: string): any {
  if (input === '*') return cities.map((city) => createResult(city));
  if (input.length < 2) return [];
  return cities
    .filter((city) => new RegExp(format(input)).test(format(city)))
    .map((city) => createResult(city));
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
