const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));
const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];

const arr = Array(n).fill("").map(() => Array(m).fill(""));
const inRange = (x, y) => {
    return x >= 0 && x < m && y >= 0 && y < n ? true : false;
}

let letter = "A";
let [x, y] = [0, 0];
let dir = 0;
for (let i = 0; i < n * m; i++) {
    if (i === 0) {
        arr[y][x] = letter;
        letter = letter === "Z" ? "A" : String.fromCharCode(letter.charCodeAt(0) + 1);
        continue;
    }
    if (!inRange(x + dx[dir], y + dy[dir]) || arr[y + dy[dir]][x + dx[dir]] !== "") {
        dir = (dir + 1) % 4;
    }
    [x, y] = [x + dx[dir], y + dy[dir]];
    arr[y][x] = letter;
    letter = letter === "Z" ? "A" : String.fromCharCode(letter.charCodeAt(0) + 1);
}

arr.forEach(el => {
    console.log(el.join(" "));
});