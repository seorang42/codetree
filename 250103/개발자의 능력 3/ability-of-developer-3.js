const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let total = 0;
arr.forEach(el => total += el);

let answer = Infinity;
for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            const sum = arr[i] + arr[j] + arr[k];
            const diff = Math.abs(sum - (total - sum));
            if (diff < answer) {
                answer = diff;
            }
        }
    }
}

console.log(answer);