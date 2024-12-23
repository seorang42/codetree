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

const calcPrimeSum = (a, b) => {
    let answer = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            answer += i;
        }
    }
    return answer;
}

console.log(calcPrimeSum(a, b));