export class YearsOld {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }
    
  earthYears() {
    let today = Date.now();
    // let birthdayInMiliSeconds = this.birthday.getTime();
    let ageRaw = (today - this.birthday);
    let age = Math.floor(ageRaw / 31536000000);
    return age;
  }
};