const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

const getValue = (x, y) => {
    return x < M && x >= 0 && y < M && y >= 0 ? board[y][x] : 0;
}

const board = Array(N).fill(0).map(() => Array(N).fill(0));
for (let i = 0; i < M; i++) {
    const [x, y] = arr[i].map(el => el - 1);
    board[y][x] = 1;
    const answer = getValue(x - 1, y) + getValue(x + 1, y) + getValue(x, y - 1) + getValue(x, y + 1) === 3 ? 1 : 0;
    console.log(answer);
}