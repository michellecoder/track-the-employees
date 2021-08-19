// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "kittycat",
    database: "employee_db",
});
db.connect((err) => {
    if (err) throw err;
    mainfunc();
});
const mainfunc = () => {
    inquirer.prompt([{
        type: "list",
        name: "choice",
        message: "Please Make A Selection",
        choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role",
        ],
    }, ]).then(answer => {
        console.log(answer);
        if (answer.choice === "view all departments") {
            getAllDepartments();

        } else if (answer.choice === "view all employees") {
            getAllEmployees();
        }
        if (answer.choice === "view all roles") {
            getAllRoles();
        }
        if (answer.choice === "add a department") {
            addADepartment();
        }
        if (answer.choice === "add an employee") {
            addAnEmployee();
        }

        if (answer.choice === "add a role") {
            addARole();
        }


        if (answer.choice === "update an employee role") {
            updateEmployee();
        }


    })




};
// For adding an ex role_id you want to do choices:[{name:"HR",value:1}]

// Query database
const getAllEmployees = function() {
    db.query("SELECT * FROM employee", function(err, results) {
        console.table(results);
        mainfunc();
    });
};
const getAllDepartments = function() {
    db.query("SELECT * FROM department", function(err, results) {
        console.table(results);
        mainfunc();
    });


};


const getAllRoles = function() {
    db.query("SELECT * FROM role", function(err, results) {
        if (err) throw err;
        console.table(results);
        mainfunc();
    })
};
const addADepartment = function() {
        inquirer.prompt([{
            type: "input",
            name: "department_name",
            message: "What is the department name?"
        }]).then(answer => {
            db.query("INSERT INTO department SET ?", answer, function(err, results) {
                if (err) throw err;
                console.log(results);
                mainfunc();
            })
        })
    }
    // Default response for any other request (Not Found)