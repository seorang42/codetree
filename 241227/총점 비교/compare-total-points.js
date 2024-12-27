const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Info {
    constructor (name, s1, s2, s3) {
        this.name = name;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
}

const infoArr = Array(n).fill(new Info());
arr.forEach((el, index) => {
    const [name, s1, s2, s3] = el.split(" ");
    infoArr[index] = new Info(name, Number(s1), Number(s2), Number(s3));
})
const sortedArr = infoArr.sort((a, b) => (a.s1 + a.s2 + a.s3) - (b.s1 + b.s2 + b.s3));
sortedArr.forEach(el => {
    console.log(`${el.name} ${el.s1} ${el.s2} ${el.s3}`);
})