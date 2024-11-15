const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const array = Array(n).fill(0).map(el => Array(n).fill(0));
let count = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        array[j][i] = count;
        count++;
    }
}

array.forEach(el => console.log(el.join(" ")));