export class YearsOld {
    constructor(dateBorn) {
        this.dateBorn = dateBorn;
    }
    
    earthYears() {
        let birthday = new Date(this.dateBorn);
        let today = new Date('2019-05-31');
        let earthAge = new Date(Math.abs(today - birthday).getFullYear()
    }


};