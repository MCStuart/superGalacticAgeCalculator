import { YearsOld } from '../src/functions';

describe('Users Age in Earth Years', function() {

  it('gets birthday from user and returns age in years', function() {
    // let birthday = new Date('1990-01-01');
    // let today = new Date('2019-05-31');
    expect(YearsOld.earthYears()).toEqual(28);
  });
});