import { YearsOld } from '../src/functions';

describe('Users Age in Days', function () {

  it('Calculates how many days old a user is', function () {
    let testAge = new YearsOld("1990-01-01");
    let expectedDays = 10745;
    expect(testAge.daysOld()).toEqual(expectedDays);
  });
});
describe('Users Age in Earth Years', function() {

  it('Calculates terrestrial age from birthday', function() {
    let testAge = new YearsOld("1990-01-01");
    let expectedAge = 29;
    expect(testAge.earthYears()).toEqual(expectedAge);
  });
});
describe('Users Age in Mecury Years', function () {

  it('Calculates Mercuarial age based off terrestrial age', function () {
    let testAge = new YearsOld("1990-01-01");
    let expectedAge = 122;
    expect(testAge.mercuryYears()).toEqual(expectedAge);
  });
});
describe('Users Age in Venus Years', function () {

  it('Calculates Venusian age based off terrestrial age', function () {
    let testAge = new YearsOld("1990-01-01");
    let expectedAge = 47;
    expect(testAge.venusYears()).toEqual(expectedAge);
  });
});
describe('Users Age in Mars Years', function () {

  it('Calculates Martian age based off terrestrial age', function () {
    let testAge = new YearsOld("1990-01-01");
    let expectedAge = 15;
    expect(testAge.marsYears()).toEqual(expectedAge);
  });
});
describe('Users Age in Jupiter Years', function () {

  it('Calculates Jovian age based off terrestrial age', function () {
    let testAge = new YearsOld("1990-01-01");
    let expectedAge = 2;
    expect(testAge.jupiterYears()).toEqual(expectedAge);
  });
});
describe('Remaining days left to live on Earth', function () {

  it('Calculates remaining days left to live on Earth on average', function () {
    let testAge = new YearsOld("1990-01-01");
    let expectedDaysLeft = 17976;
    expect(testAge.daysLeft()).toEqual(expectedDaysLeft);
  });
});