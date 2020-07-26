const inquirer = require('inquirer');
const fs = require('fs');

// library modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');


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
        .then(data => {
            const{name, id, email, office} = data;
            const manager = new Manager(name, id, email, office);
            const managerOutput = {
                role: manager.getRole(),
                name: manager.getName(),
                id: manager.getId(),
                email: manager.getEmail(),
                info: manager.getOffice()
            }

            employees.push(managerOutput);
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
				choices : ['Engineer', 'Intern', 'Finish']
            }
        ])
        .then( data => {
            if(data.menuChoice === 'Engineer'){
                addEngineer();
            }else if(data.menuChoice === 'Intern'){
                addIntern();
            }else{
                const pageHTML = generatePage(employees);

                return writeFile(pageHTML)
                        .then(writeFileResponse => {
                            console.log(writeFileResponse);
                            return copyFile();
                        })
                        .then(copyFileResponse => {
                            console.log(copyFileResponse);
                        })
                        .catch(err => {
                            console.log(err);
                        });
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
        .then(data => {
            const{name, id, email, github} = data;
            const engineer = new Engineer(name, id, email, github);
            const engineerOutput = {
                role: engineer.getRole(),
                name: engineer.getName(),
                id: engineer.getId(),
                email: engineer.getEmail(),
                info: engineer.getGithub()
            }

            employees.push(engineerOutput);
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
        .then(data => {
            const{name, id, email, school} = data;
            const intern = new Intern(name, id, email, school);
            const internOutput = {
                role: intern.getRole(),
                name: intern.getName(),
                id: intern.getId(),
                email: intern.getEmail(),
                info: intern.getSchool()
            }

            employees.push(internOutput);
            addTeam();
        })
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err);
              return;
            }

            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            })
        });
    })
}

addManager();