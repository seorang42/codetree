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
                let sum3 = 0;
                remain.forEach((el, index) => {
                    if (index !== k && index !== l) {
                        sum3 = el;
                    }
                });
                if (sum1 !== sum2 && sum2 !== sum3 && sum3 !== sum1) {
                    const sumArr = [sum1, sum2, sum3].sort((a, b) => a - b);
                    const diff = sumArr[2] - sumArr[0];
                    if (diff < answer) {
                        answer = diff;
                    }
                }
            }
        }
    }
}

console.log(answer !== Infinity ? answer : -1);