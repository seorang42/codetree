const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [T, a, b] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" "));

const OFFSET = a;
const line = Array(b - a + 1).fill("");
for (let i = 0; i < T; i++) {
    line[Number(arr[i][1]) - OFFSET] = arr[i][0];
}

let answer = 0;
for (let i = 0; i < line.length; i++) {
    let [sDis, nDis] = [Infinity, Infinity];
    for (let j = 0; j < line.length; j++) {
        if (line[j] === "S" && Math.abs(j - i) < sDis) {
            sDis = Math.abs(j - i);
        }
    }
    for (let j = 0; j < line.length; j++) {
        if (line[j] === "N" && Math.abs(j - i) < nDis) {
            nDis = Math.abs(j - i);
        }
    }
    if (sDis <= nDis) answer++;
}

console.log(answer);