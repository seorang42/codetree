const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const arr = Array(n).fill(0).map(() => Array(m).fill(0));
let dir = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < m ? true : false;
}

let [x, y] = [0, 0];
let count = 1;
for (let i = 0; i < n * m; i++) {
    if (i === 0) {
        arr[x][y] = count;
        count++;
        continue;
    }
    if (!inRange(x + dx[dir], y + dy[dir]) || arr[x + dx[dir]][y + dy[dir]] !== 0) {
        dir = (dir + 1) % 4;
    }
    [x, y] = [x + dx[dir], y + dy[dir]];
    arr[x][y] = count;
    count++;
}

arr.forEach(el => {
    console.log(el.join(" "));
});