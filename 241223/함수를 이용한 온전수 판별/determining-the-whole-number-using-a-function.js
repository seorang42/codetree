const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const is2Time = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

const endWith5 = (num) => {
    if (num % 10 === 5) {
        return true;
    }
    return false;
}

const is3TimeNot9Time = (num) => {
    if (num % 3 === 0 && num % 9 !== 0) {
        return true;
    }
    return false;
}

const countOnjeon = (a, b) => {
    let answer = 0;
    for (let i = a; i <= b; i++) {
        if (is2Time(i)) {
            continue;
        }
        if (endWith5(i)) {
            continue;
        }
        if (is3TimeNot9Time(i)) {
            continue;
        }
        answer++;
    }
    return answer;
}

console.log(countOnjeon(a, b));