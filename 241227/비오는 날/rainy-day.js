const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Data {
    constructor (date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const dataArr = Array(n).fill(new Data());
arr.forEach((el, index) => {
    const [date, day, weather] = el.split(" ");
    dataArr[index] = new Data(date, day, weather);
})
const soonest = dataArr.filter(el => el.weather === "Rain").sort((a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0)[0];
console.log(`${soonest.date} ${soonest.day} ${soonest.weather}`);