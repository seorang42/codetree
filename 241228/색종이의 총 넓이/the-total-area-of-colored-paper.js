const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const OFFSET = 100;
const arr = input.slice(0).map(el => el.split(" ").map(el => Number(el) + OFFSET));

const board = Array(200).fill(0).map(() => Array(200).fill(0));
arr.forEach(el => {
    const [startX, startY] = el;
    for (let i = startX; i < startX + 8; i++) {
        for (let j = startY; j < startY + 8; j++) {
            board[i][j] = 1;
        }
    }
});

let answer = 0;
board.forEach(el => el.forEach(el => {
    if (el === 1) {
        answer++;
    }
}));
console.log(answer);