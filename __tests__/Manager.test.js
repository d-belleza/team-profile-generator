const Manager = require('../lib/Manager');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// manager inherits Employee properties
test('check if Employee is inherited', () => {
    const manager = new Manager('Bob', 1, 'bob@email.com', 1);

    expect(manager).toHaveProperty('name', expect.any(String));
    expect(manager).toHaveProperty('id', expect.any(Number));
    expect(manager).toHaveProperty('email', expect.stringMatching(emailRegEx));
})

// check if office is added to constructor
test('check if Manager has office', () => {
    const manager = new Manager('Bob', 1, 'bob@email.com', 1);

    expect(manager).toHaveProperty('office', expect.any(Number));
})

// test getOffice() returns 'office' output
test('get office number', () => {
    const manager = new Manager('Bob', 1, 'bob@email.com', 1);

    expect(manager.getOffice()).toEqual(expect.stringContaining((manager.office).toString()));
})

// test getRole() returns 'role' output
test('get role', () => {
    const manager = new Manager('Bob', 1, 'bob@email.com', 1);

    expect(manager.getRole()).toEqual(expect.stringContaining('MANAGER'));
})