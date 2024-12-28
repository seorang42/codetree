const fs = require("fs");
const OFFSET = 1000;
const [A, B] = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" ").map(el => Number(el) + OFFSET));

const board = Array(2000).fill(0).map(() => Array(2000).fill(0));

const [ax1, ay1, ax2, ay2] = A;
for (let i = ax1; i < ax2; i++) {
    for (let j = ay1; j < ay2; j++) {
        board[i][j] = 1;
    }
}

const [bx1, by1, bx2, by2] = B;
for (let i = bx1; i < bx2; i++) {
    for (let j = by1; j < by2; j++) {
        board[i][j] = 0;
    }
}

const startX1 = board.findIndex(row => row.includes(1));
const startX2 = board.findLastIndex(row => row.includes(1));
let startY1 = -1, startY2 = -1;

if (startX1 !== -1 && startX2 !== -1) {
    startY1 = Math.min(...board[startX1].map((val, idx) => val === 1 ? idx : Infinity));
    startY2 = Math.max(...board[startX2].map((val, idx) => val === 1 ? idx : -Infinity));
}

const answer = (startX1 !== -1 && startX2 !== -1 && startY1 !== -1 && startY2 !== -1) 
    ? (startX2 - startX1 + 1) * (startY2 - startY1 + 1) 
    : 0;

console.log(answer);
