const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

[a, b].forEach(el => console.log(el % 2 === 0 ? "even" : "odd"));