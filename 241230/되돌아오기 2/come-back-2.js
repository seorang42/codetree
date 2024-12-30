const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("");

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
let dir = 3;

let [x, y] = [0, 0];
let answer = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "F") {
        [x, y] = [x + dx[dir], y + dy[dir]];
    } else if (arr[i] === "R") {
        dir = (dir + 1) % 4;
    } else if (arr[i] === "L") {
        dir = (dir + 3) % 4;
    }

    if (x === 0 && y === 0) {
        answer = i + 1;
        break;
    }
}

console.log(answer);