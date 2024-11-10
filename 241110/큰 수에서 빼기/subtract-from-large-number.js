const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

if (a > b) {
    console.log(a - b);
} else {
    console.log(b - a);
}