const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let [classCount, hallCount, wcCount] = [0, 0, 0]
for (let i = 1; i <= n; i++) {
    if (i % 12 === 0) {
        wcCount++;
    } else if (i % 3 === 0) {
        hallCount++;
    } else if (i % 2 === 0) {
        classCount++;
    }
}

console.log([classCount, hallCount, wcCount].join(" "));