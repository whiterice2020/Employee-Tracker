var mysql = require("mysql");
var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "employee_tracker"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// Questions to ask the user
//   This function starts when the server loads
function start() {
    inquirer
        .prompt({
            name: "whatToDo",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View All Roles",
                "Add Employee Role",
                "Remove Employee Role",

            ]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.whatToDo === "View All Employees") {
                viewAllEmployees();
            }
            else if (answer.whatToDo === "View All Employees by Department") {
                viewAllEmployeesbyDepartment();
            } else if (answer.whatToDo === "View All Employees by Manager") {
                viewAllEmployeesbyManager();
            } else if (answer.whatToDo === "Add Employee") {
                addEmployee();
            }
            else if (answer.whatToDo === "Update Employee Role") {
                updateEmployeeRole();
            }
            else if (answer.whatToDo === "Update Employee Manager") {
                updateEmployeeManager();
            }
            else if (answer.whatToDo === "View All Roles") {
                viewAllRoles();
            }
            else if (answer.whatToDo === "Add Employee Role") {
                addRole();
            }
            else if (answer.whatToDo === "Remove Employee Role") {
                removeRole();
            } else {
                connection.end();
            }
        });
}

function viewAllEmployees() {
    // Will display all current employees
    var query = "SELECT first_name, last_name FROM employee WHERE ?";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].first_name + res[i].last_name);
      }
    //   restart questions
      start();
    });   
}

function viewAllEmployeesbyDepartment() {
    // Will display all current employees by department
    // Need to modify code to show employees by department, this requires 2 tables
    var query = "SELECT first_name, last_name FROM employee WHERE ?";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].first_name + res[i].last_name);
      }
    //   restart questions
      start();
    });   
}

function viewAllEmployeesbyManager() {
    // Will display all current employees by manager
    // Need to modify code to show employees by manager, this requires 2 tables
    var query = "SELECT first_name, last_name FROM employee WHERE ?";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].first_name + res[i].last_name);
      }
    //   restart questions
      start();
    });   
}

function addEmployee() {
    // prompt for info about adding the employee
    inquirer
        .prompt([
            {
                name: "employeeFirstName",
                type: "input",
                message: "What is the employee's first name?",

            }
            {
                name: "employeeLastName",
                type: "input",
                message: "What is the employee's last name?",

            }
            {
                name: "employeeRole",
                type: "list",
                message: "What is the employee's role?",
                choices: [
                    "Sales Lead",
                    "Salesperson",
                    "Lead Engineer",
                    "Account Manager",
                    "Accountant",
                    "Legal Team Lead",
                ]
            }
            {
                name: "employeeManager",
                type: "list",
                message: "Who is the employee's manager?",
                choices: [
                    // need to input employee manager////////////////////
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.employeeFirstName,
                    last_name: answer.employeeLastName,
                    role_id: answer.employeeRole,
                    highest_bid: answer.manager_id,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your employee was created successfully!");
                    // Restart the prompt
                    start();
                }
            );
        });
}

function removeEmployee() {
    // prompt for Removing of Employee
    inquirer
        .prompt([
            {
                name: "removeEmployee",
                type: "list",
                message: "Which employee do you want to remove?",
                choices: [
                    // need code to list employees from DB////////////////////////
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, Remove employee from DB
            connection.query(
                // Need to modify below code to remove not insert///////////////////////
                "INSERT INTO employee SET ?",
                {//   Need to figure out how to remove from DB/////////////////////////////

                },
                function (err) {
                    if (err) throw err;
                    console.log("The employee was removed successfully!");
                    // Restart the prompt
                    start();
                }
            );
        });
}

function updateEmployeeRole() {
    // prompt for Updating Employee Role
    inquirer
        .prompt([
            {
                name: "employeeRoleUpdate",
                type: "list",
                message: "What is the employee's role?",
                choices: [
                    "Sales Lead",
                    "Salesperson",
                    "Lead Engineer",
                    "Account Manager",
                    "Accountant",
                    "Legal Team Lead",
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, this will change the employee role from old value to new one chosen
            connection.query(
                // Need to modify below code from insert to whatever the update is for sql
                "INSERT INTO employee SET ?",
                {
                    // need to write code to pull current employee roles////////////////////
                },
                function (err) {
                    if (err) throw err;
                    console.log("The employees successfully!");
                    // Restart the prompt
                    start();
                }
            );
        });
}

function updateEmployeeManager() {
    // prompt for Updating Employee Manager
    inquirer
        .prompt([
            {
                name: "updateEmployeeManager",
                type: "list",
                message: "What manager do you want to assign ",
                choices: [
                    // Need code to list current employees//////////////////////////
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, this will update the employees manager, by manager id
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    manager_id: answer.updateEmployeeManager,
                },
                function (err) {
                    if (err) throw err;
                    console.log("The employees manager was udpated successfully!");
                    // Restart the prompt
                    start();
                }
            );
        });
}
function viewAllRoles() {
    // Will display all current roles
    inquirer
        .prompt([
            {
                name: "viewAllRoles",
                type: "list",
                message: "Here are all the current roles",
                choices: [
                    // Need code to display current roles from db/////////////////////
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, restart the questions
            connection.query(
                function (err) {
                    if (err) throw err;
                    
                    // Restart the prompt
                    start();
                }
            );
        });
}

function addRole() {
    // prompt for info about adding a new role
    inquirer
        .prompt([
            {
                name: "addRole",
                type: "input",
                message: "What role would you like to add?",
            }
            {
                name: "salary",
                type: "input",
                message: "What is the salary?",
            }
            {
                name: "departmentID",
                type: "list",
                message: "Which department does this belong to?",
                choices: [
                    // need to write code to list available departments//////////////////////
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, insert a new role into the db
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.addRole,
                    salary: answer.salary,
                    department_id: answer.departmentID,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your role was created successfully!");
                    // Restart the prompt
                    start();
                }
            );
        });
}

function removeRole() {
    // prompt for info about removing a role
    inquirer
        .prompt([
            {
                name: "removeRoll",
                type: "list",
                message: "What role would you like to remove?",
                choices: [
                    // need to write code to list current roles///////////////////////
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, remove the role from the db
            connection.query(
                // need to modify the line below to remove the roll from the db
                "INSERT INTO auctions SET ?",
                {
                    item_name: answer.item,
                    category: answer.category,
                    starting_bid: answer.startingBid || 0,
                    highest_bid: answer.startingBid || 0
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your auction was created successfully!");
                    // restart questions
                    start();
                }
            );
        });
}

