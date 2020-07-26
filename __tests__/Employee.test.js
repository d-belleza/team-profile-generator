const Employee = require('../lib/Employee');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// employee object is created and returns properties
test('create an employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringMatching(emailRegEx));
})

test('get employee name', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com')

    expect(employee.getName()).toEqual(expect.any(String));
})

test('get employee ID number', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com')

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('get employee email', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com')

    expect(employee.getEmail()).toEqual(expect.stringMatching(emailRegEx));
})

test('get employee role', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com')

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})