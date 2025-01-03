const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let count = 0;
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
            let flag = true;
            arr.forEach(el => {
                let [S, B] = [0, 0];
                const [input, s, b] = el;
                const inputArr = String(input).split("").map(el => Number(el));
                const answerArr = [i, j, k];
                inputArr.forEach((el, index) => {
                    if (el === answerArr[index]) {
                        S++;
                    } else {
                        answerArr.forEach((e, i) => {
                            if (index !== i && e === el) {
                                B++;
                            }
                        });
                    }
                });
                if (JSON.stringify([s, b]) !== JSON.stringify([S, B])) {
                    flag = false;
                }
            });
            if (flag) count++;
        }
    }
}

console.log(count);