const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [m1, d1, m2, d2] = input[0].split(" ").map(el => Number(el));
const target = input[1];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const targetIndex = DAYS.indexOf(target);

const [start, end] = [new Date(2024, m1 - 1, d1).getTime(), new Date(2024, m2 - 1, d2).getTime()];
const diff = (end - start) / (1000 * 60 * 60 * 24);
const answer = Math.ceil((diff - targetIndex) / 7) + 1;
console.log(answer);