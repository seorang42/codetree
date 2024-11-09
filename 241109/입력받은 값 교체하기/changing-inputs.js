const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ");
[a, b] = [b, a];

console.log([a, b].join(" "));