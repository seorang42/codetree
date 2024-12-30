const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, t] = input[0].split(" ").map(el => Number(el));
const [r, c, d] = input[1].split(" ");
const dx = [0, 1, -1, 0], dy = [1, 0, 0, -1];
const mapper = {R : 0, D : 1, U : 2, L : 3};

let dir = mapper[d];
let [x, y] = [Number(r), Number(c)];
for (let i = 0; i < t; i++) {
    const [tempX, tempY] = [x + dx[dir], y + dy[dir]];
    if (tempX > n) {
        x = tempX - 1;
        dir = 3 - dir;
    } else if (tempX <= 0) {
        x = tempX + 1;
        dir = 3 - dir;
    } else if (tempY > n) {
        y = tempY - 1;
        dir = 3 - dir;
    } else if (tempY <= 0) {
        y = tempY + 1;
        dir = 3 - dir;
    } else {
        [x, y] = [tempX, tempY];
    }
}

console.log(`${x} ${y}`);