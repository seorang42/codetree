const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
input.forEach((el, index) => {
    if (index % 2 === 0) {
        console.log(el);
    }
})