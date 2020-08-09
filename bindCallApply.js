const normalPerson = {
    firstName: 'Iqbal',
    lastName: 'hossain',
    salary: 15000,
    getFullName() {
        console.log(this.firstName + this.lastName);
    },
    chargeBill(amount,tips,tax) {
        
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const friendlyPerson = {
    firstName: 'Iqram',
    lastName: 'Hossain',
    salary:25000
    
}


normalPerson.chargeBill.call(friendlyPerson, 100,10,20);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [10, 20, 30]);
console.log(friendlyPerson.salary);