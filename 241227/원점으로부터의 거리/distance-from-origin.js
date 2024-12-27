const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Cordinate {
    constructor (x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
}

const corArr = Array(n).fill(new Cordinate());
arr.forEach((el, index) => {
    const [x, y] = el.split(" ").map(el => Number(el));
    corArr[index] = new Cordinate(x, y, index + 1);
})
const sortedArr = corArr.sort((a, b) => {
    const [aDistance, bDistance] = [Math.abs(a.x) + Math.abs(a.y), Math.abs(b.x) + Math.abs(b.y)];
    if (aDistance !== bDistance) {
        return aDistance - bDistance;
    } else {
        return a.index - b.index;
    }
})
sortedArr.forEach(el => {
    console.log(el.index);
})