const fs = require("fs");
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const [start, end] = [new Date(2011, m1, d1).getTime(), new Date(2011, m2, d2).getTime()];
const diff = (end - start) / (1000 * 60 * 60 * 24);
const remain = diff >= 0 ? diff % 7 : 7 - Math.abs(diff % 7);

console.log(DAYS[remain]);