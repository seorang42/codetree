const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, A] = input[0].split(" ");

let count = 0;
for (let i = 1; i <= Number(n); i++) {
    if (input[i] === A) {
        count++;
    }
}

console.log(count);