const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

class Info {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
}
const scoreArr = Array(5).fill(new Info());
input.forEach((el, index) => {
    const [name, score] = el.split(" ");
    scoreArr[index] = new Info(name, Number(score));
});
const lowest = scoreArr.sort((a, b) => a.score - b.score)[0];

console.log(lowest.name + " " + lowest.score);