export class YearsOld {
    constructor(dateBorn) {
        this.dateBorn = dateBorn;
        let birthday = new Date(this.dateBorn);
        let today = new Date('2019-05-31');
    }
    
    earthYears(birthday) {
        let earthAge = Math.floor((today - birthday) / 31536000000);
    }
};