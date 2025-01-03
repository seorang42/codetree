const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

let answer = 0;
let flag = false;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        for (let k = 1; k <= N; k++) {
            flag = false;
            if (Math.abs(i - arr[0]) <= 2 || Math.abs(j - arr[1]) <= 2 || Math.abs(k - arr[2]) <= 2) {
                flag = true;
            }
            if (flag) {
                answer++;
            }
        }
    }
}

console.log(answer);