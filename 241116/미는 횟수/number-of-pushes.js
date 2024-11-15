const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split("\n");

let count = 0;
for (let i = 0; i < a.length; i++) {
    a = a.slice(-1) + a.slice(0, -1);
    count++;
    if (a === b) {
        console.log(count);
        break;
    }
}

if (count === a.length) {
    console.log(-1);
}