const fs = require("fs");
const year = Number(fs.readFileSync(0).toString().trim());

if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
    console.log(true);
} else {
    console.log(false);
}