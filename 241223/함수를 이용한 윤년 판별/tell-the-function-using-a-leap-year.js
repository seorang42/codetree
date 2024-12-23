const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const checkLeapYear = (num) => {
    if (num % 4 !== 0) {
        return false;
    } else if (num % 100 === 0 && num % 400 !== 0) {
        return false;
    }
    return true;
}

console.log(checkLeapYear(input));