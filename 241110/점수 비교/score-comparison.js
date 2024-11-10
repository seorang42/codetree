const fs = require("fs");
const [[aMath, aEng], [bMath, bEng]] = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" ").map(el => Number(el)));

console.log(aMath > bMath && aEng > bEng ? 1 : 0);