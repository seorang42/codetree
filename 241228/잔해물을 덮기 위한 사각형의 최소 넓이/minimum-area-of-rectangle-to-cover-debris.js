const fs = require("fs");
const OFFSET = 1000;
const [A, B] = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" ").map(el => Number(el) + OFFSET));

const board = Array(2000).fill(0).map(() => Array(2000).fill(0));
const [ax1, ay1, ax2, ay2] = A;
const [bx1, by1, bx2, by2] = B;

for (let i = ax1; i < ax2; i++) {
    for (let j = ay1; j < ay2; j++) {
        board[i][j] = 1;
    }
}
for (let i = bx1; i < bx2; i++) {
    for (let j = by1; j < by2; j++) {
        board[i][j] = 0;
    }
}
const [startX1, startX2] = [board.findIndex(el => el.includes(1)), board.findLastIndex(el => el.includes(1))];
const [startY1, startY2] = [board[startX1].indexOf(1), board[startX2].lastIndexOf(1)];
console.log((startX2 - startX1 + 1) * (startY2 - startY1 + 1));