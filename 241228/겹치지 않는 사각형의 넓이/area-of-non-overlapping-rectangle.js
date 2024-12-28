const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" ").map(el => Number(el)));
const ab = input.slice(0, 2);
const M = input[2];

const OFFSET = 1000;
const board = Array(2000).fill(0).map(() => Array(2000).fill(0));
ab.forEach(el => {
    const [x1, y1, x2, y2] = el;
    for (let i = x1 + OFFSET; i < x2 + OFFSET; i++) {
        for (let j = y1 + OFFSET; j < y2 + OFFSET; j++) {
            board[i][j] = 1;
        }
    }
});

const [x1, y1, x2, y2] = M;
for (let i = x1 + OFFSET; i < x2 + OFFSET; i++) {
    for (let j = y1 + OFFSET; j < y2 + OFFSET; j++) {
        board[i][j] = 0;
    }
}

let answer = 0;
board.forEach(el => el.forEach(el => {
    if (el === 1) {
        answer++;
    }
}));
console.log(answer);