const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split("");

let answer = 0;
for (let i = 0; i < n - 2; i++) {
    if (arr[i] === "C") {
        for (let j = i + 1; j < n - 1; j++) {
            if (arr[j] === "O") {
                for (let k = j + 1; k < n; k++) {
                    if (arr[k] === "W") {
                        answer++;
                    }
                }
            }
        }
    }
}

console.log(answer);