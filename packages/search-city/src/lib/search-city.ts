export class Search {
  constructor(private cities: string[]) {}

  execute(input: string): any {
    if (input === '*') return this.cities;
    if (input.length < 2) return undefined;
    return this.cities.filter((city) =>
      new RegExp(input.toLowerCase()).test(city.toLowerCase())
    );
  }
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
