const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");
const [first, second] = [input[0], input[1]];

input.forEach((el, index) => {
    if (el === first) {
        input[index] = second;
    } else if (el === second) {
        input[index] = first;
    }
})

console.log(input.join(""));