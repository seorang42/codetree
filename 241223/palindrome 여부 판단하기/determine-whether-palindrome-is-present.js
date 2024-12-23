const fs = require("fs");
const strArr = fs.readFileSync(0).toString().trim().split("");

const checkPalindrome = (arr) => {
    const length = arr.length;
    const half = length % 2 === 0 ? length / 2 : length / 2 - 1;
    for (let i = 0; i < half; i++) {
        if (strArr[i] !== strArr[length - 1 - i]) {
            return "No";
        }
    }
    return "Yes";
}

console.log(checkPalindrome(strArr));