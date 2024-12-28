const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);
const OFFSET = 100;

const board = Array(200).fill("").map(() => Array(200).fill(""));
arr.forEach((el, index) => {
    const [x1, y1, x2, y2] = el.split(" ").map(el => Number(el) + OFFSET);
    for (let i = x1; i < x2; i++) {
        for (let j = y1; j < y2; j++) {
            board[i][j] = index % 2 === 0 ? "R" : "B";
        }
    }
})

let answer = 0;
board.forEach(el => el.forEach(el => {
    if (el === "B") answer++;
}));
console.log(answer);