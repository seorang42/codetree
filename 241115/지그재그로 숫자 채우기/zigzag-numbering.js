const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let count = 0;
const array = Array(n).fill(0).map(el => Array(m).fill(0));
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (i % 2 === 0) {
            array[j][i] = count;
            count++;
        } else {
            array[n - 1 - j][m - i] = count;
            count++;
        }
    }
}

array.forEach(el => console.log(el.join(" ")));