const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const [under500, over500] = [[], []];
input.forEach(el => {
    if (el < 500) {
        under500.push(el);
    } else if (el > 500) {
        over500.push(el);
    }
});

const answer = [under500.sort((a, b) => b - a)[0], over500.sort((a, b) => a - b)[0]];
console.log(answer.join(" "));