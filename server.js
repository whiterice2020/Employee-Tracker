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
                ????();
            }
            else if (answer.whatToDo === "View All Employees by Department") {
                ????????();
            } else if (answer.whatToDo === "View All Employees by Manager"){
                ???????();
            } else if (answer.whatToDo === "Add Employee"){
                addEmployee();
            }
            else if (answer.whatToDo === "Update Employee Role"){
                updateEmployeeRole();
            }
            else if (answer.whatToDo === "Update Employee Manager"){
                updateEmployeeManager();
            }
            else if (answer.whatToDo === "View All Roles"){
                viewAllRoles();
            }
            else if (answer.whatToDo === "Add Employee Role"){
                addRole();
            }
            else if (answer.whatToDo === "Remove Employee Role"){
                removeRole();
            }else {
                connection.end();
            }
        });
}

function addEmployee() {
    // prompt for info about the item being put up for auction
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
        ]).then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
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
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
  }

  function removeEmployee() {
    // prompt for info about the item being put up for auction
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
    ]).then(function (answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
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
                // re-prompt the user for if they want to bid or post
                start();
            }
        );
    });
  }

  function updateEmployeeRole() {
    // prompt for info about the item being put up for auction
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
            // when finished prompting, insert a new item into the db with that info
            connection.query(
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
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
  }
  
  function updateEmployeeManager() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "updateEmployeeManager",
                type: "list",
                message: "What manager do you want to assign ",
                choices: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
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
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
  }
  function viewAllRoles() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "viewAllRoles",
                type: "list",
                message: "What manager do you want to assign ",
                choices: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
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
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
  }

  function addRole() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "addRole",
                type: "list",
                message: "What role would you like to add?",
                choices: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
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
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
  }

  function removeRole() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "removeRoll",
                type: "list",
                message: "What role would you like to remove?",
                choices: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ]
            }
        ]).then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
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
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
  }

