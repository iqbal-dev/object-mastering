const person = {
    firstName: 'Iqbal',
    lastName: 'hossain',
    salary: 15000,
    getFullName() {
        console.log(this.firstName + this.lastName);
    },
    chargeBill(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}


person.getFullName();
person.chargeBill(150);
person.chargeBill(150);
console.log(person.salary);
