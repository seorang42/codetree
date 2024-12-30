const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const inRange = (x, y) => {
    return x >= 0 && x < m && y >= 0 && y < n ? true : false;
}

const arr = Array(n).fill(0).map(() => Array(m).fill(0));
let [x, y] = [0, 0]
let dir = 0;
let count = 1;
for (let i = 0; i < n * m; i++) {
    if (i === 0) {
        arr[y][x] = count;
        count++;
        [x, y] = [0, 0];
        continue;
    }
    if (!inRange(x + dx[dir], y + dy[dir]) || arr[y + dy[dir]][x + dx[dir]] !== 0) {
        dir = (dir + 1) % 4;
    }
    [x, y] = [x + dx[dir], y + dy[dir]];
    arr[y][x] = count;
    count++;
}

arr.forEach(el => {
    console.log(el.join(" "));
});