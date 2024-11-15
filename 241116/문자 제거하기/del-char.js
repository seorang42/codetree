const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0];

let index = 1;
while (true) {
    if (input[index] > str.length - 1) {
        str = str.slice(0, str.length - 1);
    } else {
        str = str.slice(0, Number(input[index])) + str.slice(Number(input[index]) + 1);
    }
    index++;
    console.log(str);
    if (str.length === 1) {
        break;
    }
}