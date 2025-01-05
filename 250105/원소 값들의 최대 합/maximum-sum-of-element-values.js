const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const arr = input[1].split(" ").map(el => Number(el));

let answer = 0;
for (let i = 0; i < n; i++) {
    let [location, sum] = [i, 0];
    for (let j = 0; j < m; j++) {
        sum += arr[location];
        location = arr[location] - 1;
    }
    if (sum > answer) answer = sum;
}

console.log(answer);