const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

const result = Number(a) + Number(b);
console.log([a, b, result].join(" "));