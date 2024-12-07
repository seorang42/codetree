const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const calc = (a, b) => {
    let [num1, num2] = [a, b];
    let [count1, count2] = [1, 1];
    while (num1 !== num2) {
        if (num1 > num2) {
            count1++;
            num2 = a * count1;
        } else {
            count2++;
            num1 = b * count2;
        }
    }
    console.log(num1);
}

calc(a, b);