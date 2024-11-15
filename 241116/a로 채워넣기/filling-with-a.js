const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const a = input.slice(0, 1) + "a" + input.slice(2);
const b = a.slice(0, a.length - 2) + "a" + a.slice(a.length - 1);

console.log(b);