const inquirer = require('inquirer');
const fs = require('fs');

// library modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// employee array
const employees = [];

// email and number regex
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numRegEx = /^[1-9]*\d$/


const addManager = () => {
    console.log("---------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the team manager's name",
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the team manager ID number',
                validate: idInput => {
                    if(idInput.match(numRegEx)) {
                        return true;
                    }
                    return "Please enter the ID number"
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the team manager email',
                validate: emailInput => {
                    if(emailInput.match(emailRegEx)) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'Please enter the team manager office number',
                validate: officeInput => {
                    if(officeInput.match(numRegEx)) {
                        return true;
                    }
                    return "Please enter the office number"
                }
            }
        ])
        .then(() => {
            addTeam();
        })
}

const addTeam = () => {
    console.log("---------------");
    inquirer
        .prompt([
            {
                type    : 'list',
				name    : 'menuChoice',
				message : "Please enter the next team member's position or finish building your team",
				choices : [ 'Engineer', 'Intern', 'Finish' ]
            }
        ])
        .then( data => {
            if(data.menuChoice === 'Engineer'){
                addEngineer();
            }else if(data.menuChoice === 'Intern'){
                addIntern();
            }else{
                console.log('finishing team build');
            }
        })
}

const addEngineer = () => {
    console.log("---------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the engineer's name",
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the engineer ID number',
                validate: idInput => {
                    if(idInput.match(numRegEx)) {
                        return true;
                    }
                    return "Please enter the ID number"
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the engineer email',
                validate: emailInput => {
                    if(emailInput.match(emailRegEx)) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter the engineer GitHub username',
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    }
                    return "Please enter the GitHub username"
                }
            }
        ])
        .then(() => {
            addTeam();
        })
}

const addIntern = () => {
    console.log("---------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the intern's name",
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the intern ID number',
                validate: idInput => {
                    if(idInput.match(numRegEx)) {
                        return true;
                    }
                    return "Please enter the ID number"
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the intern email',
                validate: emailInput => {
                    if(emailInput.match(emailRegEx)) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the intern school name',
                validate: schoolInput => {
                    if(schoolInput) {
                        return true;
                    }
                    return "Please enter the school name"
                }
            }
        ])
        .then(() => {
            addTeam();
        })
}

addManager();