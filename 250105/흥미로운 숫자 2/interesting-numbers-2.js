const fs = require("fs");
const [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let answer = 0;
for (let i = start; i <= end; i++) {
    const num = String(i).split("").map(el => Number(el));
    const includedNum = [];
    num.forEach(el => {
        if (!includedNum.includes(el)) includedNum.push(el);
    });

    if (includedNum.length === 2) {
        let count = [0, 0];
        includedNum.forEach((el, index) => {
            const nums = num.filter(e => e === el).length;
            count[index] = nums;
        });
        if (count[0] === 1 && count[1] >= 2) {
            answer++;
        } else if (count[1] === 1 && count[0] >= 2) {
            answer++;
        }
    }
}

console.log(answer);