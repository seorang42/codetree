const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

const checkSB = (answer) => {
    for (let i = 0; i < arr.length; i++) {
        let [s, b] = [0, 0];
        const answerArr = String(answer).split("").map(el => Number(el));
        const inputArr = String(arr[i][0]).split("").map(el => Number(el));
        inputArr.forEach(((el, index) => {
            if (el === answerArr[index]) {
                s++;
            } else {
                let flag = false;
                answerArr.forEach((e, i) => {
                    if (i !== index && e === el) {
                        flag = true;
                    }
                });
                if (flag) b++;
            }
        }));
        if (JSON.stringify([s, b]) !== JSON.stringify([arr[i][1], arr[i][2]])) {
            return false;
        }
    }
    return true;
}

let count = 0;
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
            if (i === j || j === k || k === i) {
                continue;
            }
            const answer = i * 100 + j * 10 + k;
            const isCorrect = checkSB(answer);
            if (isCorrect) count++;
        }
    }
}

console.log(count);