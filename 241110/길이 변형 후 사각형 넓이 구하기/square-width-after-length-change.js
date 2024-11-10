const fs = require("fs");
const [width, height] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const [newWidth, newHeight] = [width + 8, height * 3];
console.log(newWidth);
console.log(newHeight);
console.log(newWidth * newHeight);