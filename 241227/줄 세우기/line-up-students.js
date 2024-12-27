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
})
const sortArr = infoArr.sort((a, b) => {
    if (a.h !== b.h) {
        return b.h - a.h;
    } else {
        if (a.w !== b.w) {
            return b.w - a.w;
        } else {
            return a.index - b.index;
        }
    }
})
sortArr.forEach(el => {
    console.log(`${el.h} ${el.w} ${el.index}`);
})