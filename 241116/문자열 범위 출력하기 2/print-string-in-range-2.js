const fs = require("fs");
const [str, length] = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";
if (str.length >= length) {
    for (let i = str.length - 1; i > str.length - 1 - length; i--) {
        answer += str[i];
    }
} else {
    for (let i = str.length - 1; i >= 0; i--) {
        answer += str[i];
    }
}

console.log(answer);