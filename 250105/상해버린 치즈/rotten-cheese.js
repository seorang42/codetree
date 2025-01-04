const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M, D, S] = input[0].split(" ").map(el => Number(el));
const eatArr = input.slice(1, D + 1).map(el => el.split(" ").map(el => Number(el)));
const sickArr = input.slice(D + 1).map(el => el.split(" ").map(el => Number(el)));

const sickPersons = sickArr.map(el => el[0]).sort((a, b) => a - b);
const rottenCheeze = [];
for (let i = 1; i <= M; i++) {
    const sickPersonArr = [];
    for (let j = 0; j < S; j++) {
        const [sickPerson, sickTime] = sickArr[j];
        for (let k = 0; k < D; k++) {
            const [person, czNum, time] = eatArr[k];
            if (person === sickPerson && time < sickTime && i === czNum) {
                sickPersonArr.push(person);
            }
        }
    }
    if (JSON.stringify(sickPersonArr.sort((a, b) => a - b)) === JSON.stringify(sickPersons)) {
        rottenCheeze.push(i);
    }
}

const answer = [];
for (let i = 0; i < D; i++) {
    const [person, czNum, time] = eatArr[i];
    if (rottenCheeze.includes(czNum)) {
        if (!answer.includes(person)) {
            answer.push(person);
        }
    }
}

console.log(answer.length);