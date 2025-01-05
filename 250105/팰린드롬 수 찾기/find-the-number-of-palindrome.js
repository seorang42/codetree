const fs = require("fs");
const [X, Y] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let answer = 0;
for (let i = X; i <= Y; i++) {
    const num = String(i).split("");
    let flag = true;
    for (let j = 0; j < parseInt(num.length / 2); j++) {
        if (num[j] !== num[num.length - j - 1]) {
            flag = false;
            break;
        }
    }
    if (flag) answer++;
}

console.log(answer);