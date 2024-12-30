const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, T] = input[0].split(" ").map(el => Number(el));
const commands = input[1].split("");
const board = input.slice(2).map(el => el.split(" ").map(el => Number(el)));
const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];

let dir = 3;
let [x, y] = [Math.floor(N / 2), Math.floor(N / 2)];
let answer = 0;

const inRange = (x, y) => {
    return x >= 0 && x < N && y >= 0 && y < N ? true : false;
}

for (let i = 0; i < commands.length; i++) {
    if (i === 0) {
        answer += board[y][x];
    }
    if (inRange(x + dx[dir], y + dy[dir]) && commands[i] === "F") {
        [x, y] = [x + dx[dir], y + dy[dir]]
        answer += board[y][x];
    } else if (commands[i] === "R") {
        dir = (dir + 1) % 4;
    } else if (commands[i] === "L") {
        dir = (dir + 3) % 4;
    }
}

console.log(answer);