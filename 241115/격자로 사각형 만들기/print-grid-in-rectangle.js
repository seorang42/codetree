const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const array = Array(n).fill(0).map(el => Array(n).fill(1));
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        array[i][j] = array[i - 1][j - 1] + array[i - 1][j] + array[i][j - 1];
    }
}

array.forEach(el => console.log(el.join(" ")));