const fs = require("fs");
const [gender, age] = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));

let result = ""
if (gender === 0) {
    if (age >= 19) {
        result = "MAN";
    } else {
        result = "BOY";
    }
} else if (gender === 1) {
    if (age >= 19) {
        result = "WOMAN";
    } else {
        result = "GIRL";
    }
}

console.log(result);