const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = input[0];
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

const OFFSET = 100;
const board = Array(200).fill(0).map(() => Array(200).fill(0));
arr.forEach(el => {
    const [x1, y1, x2, y2] = el;
    for (let i = x1 + OFFSET; i < x2 + OFFSET; i++) {
        for (let j = y1 + OFFSET; j < y2 + OFFSET; j++) {
            board[i][j] = 1;
        }
    }
});

let answer = 0;
board.forEach(el => el.forEach(el => {
    if (el === 1) answer++;
}));
console.log(answer);