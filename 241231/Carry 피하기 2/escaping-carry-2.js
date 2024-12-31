const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => Number(el));

const checkCarry = (x, y, z) => {
    const [a, b, c] = [String(x).split("").reverse(), String(y).split("").reverse(), String(z).split("").reverse()];
    for (let i = 0; i < Math.max(a.length, b.length, c.length); i++) {
        if (Math.max(a[i], 0) + Math.max(b[i], 0) + Math.max(c[i], 0) >= 10) {
            return false;
        }
    }
    return true;
}

let answer = -1;
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if (checkCarry(arr[i], arr[j], arr[k])) {
                const sum = arr[i] + arr[j] + arr[k];
                if (sum > answer) answer = sum;
            }
        }
    }
}

console.log(answer);