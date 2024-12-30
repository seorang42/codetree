const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
const [dx, dy] = [[1, 0, -1, 0], [0, -1, 0, 1]];

let [x, y] = [Math.floor(n / 2), Math.floor(n / 2)];
let [dir, count] = [0, 1];
const arr = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < n ** 2; i++) {
    if (i === 0) {
        arr[y][x] = count;
        count++;
        continue;
    }
    [x, y] = [x + dx[dir], y + dy[dir]];
    arr[y][x] = count;
    count++;

    const nextDir = (dir + 1) % 4;
    if (arr[y + dy[nextDir]][x + dx[nextDir]] === 0) dir = nextDir;
}

arr.forEach(el => {
    console.log(el.join(" "));
});