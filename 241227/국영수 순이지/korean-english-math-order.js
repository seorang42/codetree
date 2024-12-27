const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Info {
    constructor (name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const infoArr = Array(n).fill(new Info());
arr.forEach((el, index) => {
    const [name, kor, eng, math] = el.split(" ");
    infoArr[index] = new Info(name, kor, eng, math);
})
const sortedArr = infoArr.sort((a, b) => {
    if (a.kor === b.kor) {
        if (a.eng === b.eng) {
            return b.math - a.math;
        } else {
            return b.eng - a.eng;
        }
    } else {
        return b.kor - a.kor;
    }
})
sortedArr.forEach(el => {
    console.log(`${el.name} ${el.kor} ${el.eng} ${el.math}`);
})