const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

class Num {
    constructor (num, oriIndex, newIndex) {
        this.num = num;
        this.oriIndex = oriIndex;
        this.newIndex = newIndex;
    }
}

const numArr = Array(n).fill(new Num());
arr.forEach((el, index) => {
    numArr[index] = new Num(el, index + 1, 0);
})
const sortedNumArr = numArr.sort((a, b) => {
    if (a.num !== b.num) {
        return a.num - b.num;
    } else {
        return a.oriIndex - b.oriIndex;
    }
})
sortedNumArr.forEach((el, index) => {
    sortedNumArr[index] = new Num(el.num, el.oriIndex, index + 1);
})
sortedNumArr.sort((a, b) => a.oriIndex - b.oriIndex);
sortedNumArr.forEach(el => {
    process.stdout.write(el.newIndex + " ");
});