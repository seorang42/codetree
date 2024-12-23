const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const addAllNums = (num) => {
    let sum = 0;
    String(num).split("").map(el => Number(el)).forEach(el => sum += el);
    return sum % 2 === 0 ? true : false;
}

const calcAnswer = (a, b) => {
    let answer = 0;
    for (let i = a; i <= b; i++) {
        if (!isPrime(i)) {
            continue;
        }
        if (!addAllNums(i)) {
            continue;
        }
        answer++;
    }
    return answer;
}

console.log(calcAnswer(a, b));