const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            const line = Array(101).fill(0);
            arr.forEach((el, index) => {
                if (![i, j, k].includes(index)) {
                    for (let l = el[0]; l <= el[1]; l++) {
                        line[l]++;
                    }
                }
            });
            if (line.filter(el => el >= 2).length === 0) {
                answer++;
            }
        }
    }
}

console.log(answer);