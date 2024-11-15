const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
while (true) {
    if (input[index] === "END") {
        break;
    } else {
        console.log(input[index].split("").reverse().join(""));
        index++;
    }
}