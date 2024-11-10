const fs = require("fs");
const a = Number(fs.readFileSync(0).toString().trim());

a === 5 && console.log("A");
a % 2 === 0 && console.log("B");