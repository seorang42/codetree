const fs = require("fs");
const stuNum = Number(fs.readFileSync(0).toString().trim());

console.log(stuNum === 1 ? "John" : stuNum === 2 ? "Tom" : stuNum === 3 ? "Paul" : "Vacancy");