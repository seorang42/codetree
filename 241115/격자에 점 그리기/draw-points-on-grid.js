const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const array = [];
input.forEach((el, index) => {
    if (index >= 1) {
        array.push(el.split(" ").map(el => Number(el)));
    }
})

let count = 1;
const answer = Array(n).fill(0).map(el => Array(n).fill(0));
array.forEach(el => {
    answer[el[0] - 1][el[1] - 1] = count;
    count++;
})

answer.forEach(el => console.log(el.join(" ")));