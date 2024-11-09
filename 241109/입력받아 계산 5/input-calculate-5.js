const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().split(" ");

const result = Number(a) + Number(b);
console.log(result);