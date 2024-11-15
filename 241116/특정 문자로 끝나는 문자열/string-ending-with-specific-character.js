const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let count = 0;
for (let i = 0; i < 10; i++) {
    if (input[i][input[i].length - 1] === input[10]) {
        console.log(input[i]);
        count++;
    }
}

if (count === 0) {
    console.log("None");
}