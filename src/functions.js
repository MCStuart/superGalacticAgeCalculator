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
  
  earthYearsLeft() {
    let terrestrialYearsLeft = Math.floor(this.daysLeft() / 365);
    return terrestrialYearsLeft;
  }

  earthYearsExceeded() {
    let terrestrialYearsLeft = Math.floor(this.daysLeft() / 365);
    return terrestrialYearsLeft;
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

  jupiterYears() {
    let jovianAge = Math.floor(this.daysOld() / (11.862615 * 365));
    return jovianAge;
  }

  daysLeft() {
    const avgAgeExpectancyInDays = (78.69 * 365); // Avg. life expectancy in the United States for male and female combined
    let avgEarthDaysLeft = Math.abs(Math.floor(avgAgeExpectancyInDays - this.daysOld()));
    return avgEarthDaysLeft;
  }
}