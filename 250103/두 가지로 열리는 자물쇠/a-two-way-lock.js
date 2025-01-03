const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const [arr1, arr2] = [input[1].split(" ").map(el => Number(el)), input[2].split(" ").map(el => Number(el))];

let answer = 0;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        for (let k = 1; k <= N; k++) {
            const diff1 = Math.min(Math.abs(i - arr1[0]), N - Math.abs(i - arr1[0]));
            const diff2 = Math.min(Math.abs(j - arr1[1]), N - Math.abs(j - arr1[1]));
            const diff3 = Math.min(Math.abs(k - arr1[2]), N - Math.abs(k - arr1[2]));
            const diff4 = Math.min(Math.abs(i - arr2[0]), N - Math.abs(i - arr2[0]));
            const diff5 = Math.min(Math.abs(j - arr2[1]), N - Math.abs(j - arr2[1]));
            const diff6 = Math.min(Math.abs(k - arr2[2]), N - Math.abs(k - arr2[2]));

            if ((diff1 <= 2 && diff2 <= 2 && diff3 <= 2) || (diff4 <= 2 && diff5 <= 2 && diff6 <= 2)) {
                answer++;
            }
        } 
    }
}

console.log(answer);