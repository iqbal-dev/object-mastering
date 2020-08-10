class Person{
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    tax(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const person = new Person('Iqbal', 'Hossain', 15000);
console.log(person.tax(100));