const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let count = 1;
const array = Array(n).fill(0).map(el => Array(m).fill(0));
for (let k = 0; k < n + m; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (k === i + j) {
                array[i][j] = count;
                count++;
            }
        }
    }
}

array.forEach(el => console.log(el.join(" ")));