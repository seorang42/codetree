const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const index = 0;
while (index < n) {
    console.log("*");
}