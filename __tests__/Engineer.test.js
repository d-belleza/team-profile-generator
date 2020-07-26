const Engineer = require('../lib/Engineer');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Engineer inherits Employee properties
test('check if Employee is inherited', () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 1);

    expect(engineer).toHaveProperty('name', expect.any(String));
    expect(engineer).toHaveProperty('id', expect.any(Number));
    expect(engineer).toHaveProperty('email', expect.stringMatching(emailRegEx));
})

// check if github is added to constructor
test('check if Engineer has github', () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 1);

    expect(engineer).toHaveProperty('github', expect.any(Number));
})

// test getGithub() returns 'github' output
test('get github number', () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 1);

    expect(engineer.getGithub()).toEqual(expect.stringContaining((engineer.github).toString()));
})

// test getRole() returns 'role' output
test('get role', () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 1);

    expect(engineer.getRole()).toEqual(expect.stringContaining('ENGINEER'));
})