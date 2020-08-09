const normalPerson = {
    firstName: 'Iqbal',
    lastName: 'hossain',
    salary: 15000,
    getFullName() {
        console.log(this.firstName + this.lastName);
    },
    chargeBill(amount) {
        
        this.salary = this.salary - amount;
        console.log(this);
        return this.salary;
    }
}

const friendlyPerson = {
    firstName: 'Iqram',
    lastName: 'Hossain',
    salary:25000
    
}
const chargeBill = normalPerson.chargeBill.bind(friendlyPerson);
chargeBill(150);
chargeBill(500);
