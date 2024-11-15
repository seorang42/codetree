const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let count = 1;
const array = Array(n).fill(0).map(el => Array(m).fill(0));
for (let i = 0; i < n + m; i++) {
    for (let j = 0; j < Math.min(n - (Math.abs(n - i)) + 1, n + m - i - 1); j++) {
        array[Math.max(j, i - (m - 1) + j)][Math.min(i - j, m - 1 - j)] = count;
        count++;
    }
}

array.forEach(el => console.log(el.join(" ")));