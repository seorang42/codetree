const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const checkLetters = (string) => {
    const letters = [];
    const strArr = string.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (!letters.includes(strArr[i])) {
            letters.push(strArr[i]);
        }
        if (letters.length >= 2) {
            return "Yes";
        }
    }
    return "No";
}

console.log(checkLetters(input));