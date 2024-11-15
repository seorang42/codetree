const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let result = 0;
for (let i = 0; i < input.length; i++) {
    result += Number(input[i]);
}

console.log(result);