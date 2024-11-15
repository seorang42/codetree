const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [s, q] = input[0].split(" ");

for (let i = 1; i <= Number(q); i++) {
    const query = input[i].split(" ");
    const array = s.split("");
    if (Number(query[0]) === 1) {
        const [a, b] = [Number(query[1]), Number(query[2])];
        const temp = s[a - 1];
        array[a - 1] = array[b - 1];
        array[b - 1] = temp;
        console.log(array.join(""));
    } else if (Number(query[0]) === 2) {
        const [a, b] = [query[1], query[2]];
        array.forEach((el, index) => {
            if (el === a) {
                array[index] = b;
            }
        });
        console.log(array.join(""))
    }
}