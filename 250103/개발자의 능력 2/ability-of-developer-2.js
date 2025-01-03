const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let answer = Infinity;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        const sum1 = arr[i] + arr[j];
        const remain = [];
        arr.forEach((el, index) => {
            if (index !== i && index !== j) {
                remain.push(el);
            }
        });
        for (let k = 0; k < remain.length - 1; k++) {
            for (let l = k + 1; l < remain.length; l++) {
                const sum2 = remain[k] + remain[l];
                const last = [];
                remain.forEach((el, index) => {
                    if (index !== k && index !== l) {
                        last.push(el);
                    }
                });
                const sum3 = last[0] + last[1];
                const sumArr = [sum1, sum2, sum3].sort((a, b) => a - b);
                if (sumArr[2] - sumArr[0] < answer) {
                    answer = sumArr[2] - sumArr[0];
                }
            }
        }
    }
}

console.log(answer);