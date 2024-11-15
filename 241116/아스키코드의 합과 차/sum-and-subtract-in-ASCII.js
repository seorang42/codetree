const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

const [big, small] = [a.charCodeAt(0), b.charCodeAt(0)].sort((a, b) => b - a);
console.log(big + small, big - small);