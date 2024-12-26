const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n");

const [newA, newB] = [[...a].sort(), [...b].sort()];
console.log(JSON.stringify(newA) === JSON.stringify(newB) ? "Yes" : "No");