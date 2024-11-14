const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");
const array = input.split(" ").map(el => Number(el));

let max = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (array[j] > array[i] && array[j] - array[i] > max) {
            max = array[j] - array[i];
        }
    }
}

console.log(max);