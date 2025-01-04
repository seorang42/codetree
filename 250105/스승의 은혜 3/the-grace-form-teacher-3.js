const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, B] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 0; i < N; i++) {
    const discountedArr = [...arr];
    discountedArr[i][0] /= 2;
    discountedArr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    let [budget, count] = [B, 0];
    for (let j = 0; j < N; j++) {
        const totalPrice = discountedArr[j][0] + discountedArr[j][1];
        if (budget - totalPrice < 0) {
            break;
        }
        budget -= totalPrice;
        count++;
    }
    if (count > answer) answer = count;
}

console.log(answer);