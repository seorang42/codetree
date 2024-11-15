const fs = require("fs");
const [height, width] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let count = 1;
const answer = [];
for (let i = 1; i <= height; i++) {
    const line = [];
    for (let j = 1; j <= width; j++) {
        line.push(count);
        count++;
    }
    answer.push(line.join(" "));
}

console.log(answer.join("\n"));