import { YearsOld } from '../src/functions';

describe('Users Age in Earth Years', function() {

  it('can evaluate dates as equal', function() {
    expect(('1990-01-01')).toEqual("1990-01-01");
  });
  it('calculates how old in years', function() {
    let birthday = new Date(93,7,30);
    YearsOld(new Date(birthday));
    expect(earthYears(birthday)).toEqual(25)
  });
});