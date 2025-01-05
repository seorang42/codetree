const fs = require("fs");
const [[A, B, C], [D, E, F], [G, H, I]] = fs.readFileSync(0).toString().split("\n").map(el => el.split("").map(el => Number(el)))

let answer = 0;
for (let i = 1; i <= 8; i++) {
    for (let j = i + 1; j <= 9; j++) {
        // 가로
        if ([A, B, C].filter(el => [i, j].includes(el)).length === 3 || [D, E, F].filter(el => [i, j].includes(el)).length === 3 || [G, H, I].filter(el => [i, j].includes(el)).length === 3) {
            answer++;
            continue;
        }
        // 세로
        if ([A, D, G].filter(el => [i, j].includes(el)).length === 3 || [B, E, H].filter(el => [i, j].includes(el)).length === 3 || [C, F, I].filter(el => [i, j].includes(el)).length === 3) {
            answer++;
            continue;
        }
        // 대각선
        if ([A, E, I].filter(el => [i, j].includes(el)).length === 3 || [C, E, G].filter(el => [i, j].includes(el)).length === 3) {
            answer++;
            continue;
        }
    }
}

console.log(answer);