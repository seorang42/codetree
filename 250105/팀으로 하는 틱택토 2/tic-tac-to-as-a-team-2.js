const fs = require("fs");
const [[A, B, C], [D, E, F], [G, H, I]] = fs.readFileSync(0).toString().split("\n").map(el => el.split("").map(el => Number(el)))

let answer = 0;
for (let i = 1; i <= 8; i++) {
    for (let j = i + 1; j <= 9; j++) {
        if ([A, B, C].filter(el => el === i).length + [A, B, C].filter(el => el === j).length === 3 || 
        [D, E, F].filter(el => el === i).length + [D, E, F].filter(el => el === j).length === 3 || 
        [G, H, I].filter(el => el === i).length + [G, H, I].filter(el => el === j).length === 3 || 
        [A, D, G].filter(el => el === i).length + [A, D, G].filter(el => el === j).length === 3 || 
        [B, E, H].filter(el => el === i).length + [B, E, H].filter(el => el === j).length === 3 || 
        [C, F, I].filter(el => el === i).length + [C, F, I].filter(el => el === j).length === 3 || 
        [A, E, I].filter(el => el === i).length + [A, E, I].filter(el => el === j).length === 3 || 
        [C, E, G].filter(el => el === i).length + [C, E, G].filter(el => el === j).length === 3) {
            answer++;
        }
    }
}

console.log(answer);