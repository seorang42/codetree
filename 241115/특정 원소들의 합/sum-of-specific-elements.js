const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const array = [];
input.forEach(el => array.push(el.split(" ").map(el => Number(el))));

let sum = 0;
array.forEach((line, lineIndex) => {
    line.forEach((el, elIndex) => {
        if (elIndex <= lineIndex) {
            sum += el;
        }
    });
});

console.log(sum);