const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el)).sort((a, b) => b - a);

let answer = 0;
for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
        answer = i;
    }
}

console.log(answer);