const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));

[a, b, c].forEach(el => console.log(el.toFixed(3)));