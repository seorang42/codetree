const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const array = input.slice(1, n + 1);
const target = input[n + 1];

let [count, sum] = [0, 0];
array.forEach(el => {
    if (el[0] === target) {
        count++;
        sum += el.length;
    }
});

console.log(count, (sum / count).toFixed(2));