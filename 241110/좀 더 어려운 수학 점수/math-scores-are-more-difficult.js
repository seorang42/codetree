const fs = require("fs");
const [[aMath, aEng], [bMath, bEng]] = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" ").map(el => Number(el)));

if (aMath === bMath) {
    console.log(aEng > bEng ? "A" : "B");
} else {
    console.log(aMath > bMath ? "A" : "B");
}