const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const map = input.slice(1, N + 1);
const K = Number(input[N + 1]);

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
const inRange = (x, y) => {
    return x >= 0 && x < N && y >= 0 && y < N ? true : false;
}

let [x, y] = [0, 0];
let dir = 0;
if (K <= N) {
    [x, y] = [K - 1, 0];
    dir = 1;
} else if (K <= 2 * N) {
    [x, y] = [N - 1, ((K - 1) % N)];
    dir = 2;
} else if (K <= 3 * N) {
    [x, y] = [N - 1 - ((K - 1) % N), N - 1]
    dir = 3;
} else if (K <= 4 * N) {
    [x, y] = [0, N - 1 - ((K - 1) % N)]
    dir = 0;
}

let answer = 0;
while (true) {
    answer++;
    if (map[y][x] === "/") {
        dir = dir % 2 === 0 ? (dir + 3) % 4 : (dir + 1) % 1;
    } else if (map[y][x] === "\\") {
        dir = dir % 2 === 0 ? (dir + 1) % 4 : (dir + 3) % 1;
    }
    if (inRange(x + dx[dir], y + dy[dir])) {
        [x, y] = [x + dx[dir], y + dy[dir]];
    } else {
        break;
    }
}

console.log(answer);