const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const array = [];
input.forEach((el, index) => {
    if (index >= 1 && index <= m) {
        array.push(el.split(" ").map(el => Number(el)));
    }
});

const coins = Array(n).fill(0).map(el => Array(n).fill(0));
array.forEach(el => {
    const target = coins[el[0] - 1][el[1] - 1];
    if (target === 0) {
        coins[el[0] - 1][el[1] - 1] = 1;
    }
});

coins.forEach(el => console.log(el.join(" ")));