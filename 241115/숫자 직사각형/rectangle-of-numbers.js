const fs = require("fs");
const [height, width] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let count = 1;
const answer = Array(height).fill(0).map(el => Array(width).fill(0));
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        answer[i][j] = count;
        count++;
    }
}

answer.forEach(el => console.log(el.join(" ")));