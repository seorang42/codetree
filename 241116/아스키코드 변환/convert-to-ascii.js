const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

console.log(a.charCodeAt(0), String.fromCharCode(Number(b)));