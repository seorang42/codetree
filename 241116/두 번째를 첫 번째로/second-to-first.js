const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let result = input.split("");
const [first, second] = [input[0], input[1]];
result.forEach((el, index) => {
    if (el === second) {
        result[index] = first;
    }
})

console.log(result.join(""));