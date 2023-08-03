const mysql2 = require("mysql2");

function connectToDatabase() {
  return mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee_tracker",
  });
}

function getAllDepartments(db) {
  db.query("SELECT * FROM department;", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
    }
  });
}

module.exports = { connectToDatabase, getAllDepartments };
