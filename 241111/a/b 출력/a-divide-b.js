const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const result = (Math.floor((a / b) * (10 ** 21)) / 10 ** 21)
console.log(result);