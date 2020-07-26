const Intern = require('../lib/Intern');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Intern inherits Employee properties
test('check if Employee is inherited', () => {
    const intern = new Intern('Bob', 1, 'bob@email.com', 1);

    expect(intern).toHaveProperty('name', expect.any(String));
    expect(intern).toHaveProperty('id', expect.any(Number));
    expect(intern).toHaveProperty('email', expect.stringMatching(emailRegEx));
})

// check if github is added to constructor
test('check if Intern has school', () => {
    const intern = new Intern('Bob', 1, 'bob@email.com', 1);

    expect(intern).toHaveProperty('school', expect.any(Number));
})

// test getSchool() returns 'school' output
test('get school number', () => {
    const intern = new Intern('Bob', 1, 'bob@email.com', 1);

    expect(intern.getSchool()).toEqual(expect.stringContaining((intern.school).toString()));
})

// test getRole() returns 'role' output
test('get role', () => {
    const intern = new Intern('Bob', 1, 'bob@email.com', 1);

    expect(intern.getRole()).toEqual(expect.stringContaining('INTERN'));
})