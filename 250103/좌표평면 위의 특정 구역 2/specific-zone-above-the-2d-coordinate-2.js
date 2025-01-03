const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = Infinity;
for (let i = 0; i < N; i++) {
    let [minX, maxX, minY, maxY] = [Infinity, 0, Infinity, 0];
    arr.forEach((el, index) => {
        if (index !== i) {
            [x, y] = el;
            if (x < minX) {
                minX = x;
            }
            if (x > maxX) {
                maxX = x;
            }
            if (y < minY) {
                minY = y;
            }
            if (y > maxY) {
                maxY = y;
            }
        }
    });
    const area = (maxX - minX) * (maxY - minY);
    if (area < answer) {
        answer = area;
    }
}

console.log(answer);