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
  
  // mercuryYears() {
  //   let mercuryAge = this.age /
  // }

  // venusYears() {

  // }

  // marsYears() {

  // }

  // jupiterYears() {

  // }
};