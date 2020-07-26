const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);

        this.office = office;
    }

    getOffice() {
        return `Office Number: ${this.office}`;
    }

    getRole() {
        return `<i class="fas fa-mug-hot mr-2 role-icon"></i>MANAGER`
    }
}

module.exports = Manager;