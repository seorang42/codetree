const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const letter = input[1];

let answer = 0;
for (let i = 1; i <= N; i++) {
    let flag = false;
    for (let j = 0; j <= N - i; j++) {
        const target = letter.slice(j, j + i);
        let count = 0;
        for (let k = j; k <= N - i; k++) {
            let result = "";
            for (let l = k; l < k + i; l++) {
                result += letter[l];
            }
            if (result === target) {
                count++;
            }
        }
        if (count >= 2) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        answer = i;
        break;
    }
}

console.log(answer);