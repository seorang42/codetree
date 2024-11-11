const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

let start = a;
const result = [];
while (start <= b) {
    if (start % 2 === 0) {
        result.push(start);
        start += 2;
    } else {
        start++;
    }
}

console.log(result.join(" "));