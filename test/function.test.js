import { YearsOld } from '../src/functions';

describe('Users Age in Earth Years', function() {

  it('Calculates terrestrial age from birthday', function() {
    let testAge = new YearsOld("1990-01-01");
    let expectedAge = 29;
    expect(testAge.earthYears()).toEqual(expectedAge);
  });
  
});