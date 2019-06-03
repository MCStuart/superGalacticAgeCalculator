export class YearsOld {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }
  
  daysOld() {
    let today = Date.now();
    let ageRaw = (today - this.birthday);
    let ageInDays = Math.floor(ageRaw / 8.64e+7);
    return ageInDays;
  }

  earthYears() {
    let terrestrialAge = Math.floor(this.daysOld() / 365);
    return terrestrialAge;
  }
  
  mercuryYears() {
    let mercurialAge = Math.floor(this.daysOld() / 87.97);
    return mercurialAge;
  }

  venusYears() {
    let venusianAge = Math.floor(this.daysOld() / 224.70);
    return venusianAge;
  }

  marsYears() {
    let martianAge = Math.floor(this.daysOld() / (1.8808476 * 365));
    return martianAge;
  }

  // jupiterYears() {

  // }
};