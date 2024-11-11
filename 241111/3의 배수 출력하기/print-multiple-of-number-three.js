const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const result = [];
let index = 1;
while (index <= n) {
    if (index % 3 === 0) {
        result.push(index);
        index += 3;
    }
    index++;
}

console.log(result.join(" "));