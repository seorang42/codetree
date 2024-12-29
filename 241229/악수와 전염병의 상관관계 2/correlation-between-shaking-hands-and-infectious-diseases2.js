const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, K, P, T] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el))).sort((a, b) => a[0] - b[0]);

const devArr = Array(N).fill(0);
const shakeArr = Array(N).fill(0);

devArr[P - 1] = 1;
arr.forEach(el => {
    if (devArr[el[1] - 1] === 1 && devArr[el[2] - 1] === 1) {
        shakeArr[el[1] - 1]++;
        shakeArr[el[2] - 1]++;
    }
    if (devArr[el[1] - 1] === 1 && devArr[el[2] - 1] === 0) {
        if (shakeArr[el[1] - 1] < 2) {
            shakeArr[el[1] - 1]++;
            devArr[el[2] - 1] = 1;
        }
    } else if (devArr[el[1] - 1] === 0 && devArr[el[2] - 1] === 1) {
        if (shakeArr[el[2] - 1] < 2) {
            shakeArr[el[2] - 1]++;
            devArr[el[1] - 1] = 1;
        }
    }
});

console.log(devArr.join(""));