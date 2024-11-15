const fs = require("fs");
const [str, length] = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";
for (let i = str.length - 1; i > str.length - 1 - length; i--) {
    answer += str[i];
}

console.log(answer);