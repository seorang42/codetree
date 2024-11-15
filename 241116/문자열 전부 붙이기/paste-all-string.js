const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";
input.forEach((el, index) => {
    if (index >= 1) {
        answer += el;
    }
})

console.log(answer);