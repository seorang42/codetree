const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const check369 = (num) => {
    const splittedNum = String(num).split("");
    if (splittedNum.includes("3") || splittedNum.includes("6") || splittedNum.includes("9")) {
        return true;
    }
    return false;
}

const is3times = (num) => {
    if (Number(num) % 3 === 0) {
        return true;
    }
    return false;
}

const countAnswer = (a, b) => {
    let answer = 0;
    for (let i = a; i <= b; i++) {
        if (check369(i) || is3times(i)) {
            answer++;
        }
    }
    return answer;
}

console.log(countAnswer(a, b));