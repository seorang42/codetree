const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" "));

let answer = 0;
const startColor = arr[0][0];
const endColor = arr[n - 1][m - 1];

if (startColor !== endColor) {
    for (let i = 1; i < n - 2; i++) {
        for (let j = 1; j < m - 2; j++) {
            if (arr[i][j] === endColor) {
                for (let k = i + 1; k < n - 1; k++) {
                    for (let l = j + 1; l < m - 1; l++) {
                        if (arr[k][l] === startColor) {
                            answer++;
                        }
                    }
                }
            }
        }
    }
}

console.log(answer);