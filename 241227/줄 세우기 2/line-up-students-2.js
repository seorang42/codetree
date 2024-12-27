const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Info {
    constructor (h, w, index) {
        this.h = h;
        this.w = w;
        this.index = index;
    }
}

const infoArr = Array(n).fill(new Info());
arr.forEach((el, index) => {
    const [h, w] = el.split(" ").map(el => Number(el));
    infoArr[index] = new Info(h, w, index + 1);
});
const sortedArr = infoArr.sort((a, b) => {
    if (a.h !== b.h) {
        return a.h - b.h;
    } else {
        return b.w - a.w;
    }
})
sortedArr.forEach(el => {
    console.log(`${el.h} ${el.w} ${el.index}`);
});