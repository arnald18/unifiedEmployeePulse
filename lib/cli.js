const inquirer = require("inquirer");
const { connectToDatabase, getAllDepartments } = require("./db");
const questions = [
  {
    message: "What would you like to do?",
    name: "mainSelection",
    type: "list",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
  },

  // Add Department
  {
    message: "What is the name of the department?",
    name: "newDepartmentName",
    type: "input",
    when: ({ mainSelection }) => mainSelection === "Add Department",
  },
  //   Add  Role
  {
    message: "What is the name of the role?",
    name: "newRoleName",
    type: "input",
    when: ({ mainSelection }) => mainSelection === "Add Role",
  },

  {
    message: "What is the salary of the role?",
    name: "newRoleSalary",
    type: "input",
    when: ({ mainSelection }) => mainSelection === "Add Role",
  },
  {
    message: "What is the salary of the role?",
    name: "newRoleDepartment",
    type: "list",
    choices: ["Accounting"],
    when: ({ mainSelection }) => mainSelection === "Add Role",
  },
];

function start() {
  const db = connectToDatabase();

  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    if (answers.mainSelection === "View All Departments") {
      getAllDepartments(db);
    }
  });
}

module.exports = start;
