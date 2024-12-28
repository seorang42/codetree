const fs = require("fs");
const OFFSET = 1000;
const [A, B] = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" ").map(Number));

// A와 B의 좌표
const [ax1, ay1, ax2, ay2] = A.map(el => el + OFFSET);
const [bx1, by1, bx2, by2] = B.map(el => el + OFFSET);

// A ∩ B (겹치는 영역) 계산
const overlapX1 = Math.max(ax1, bx1);
const overlapY1 = Math.max(ay1, by1);
const overlapX2 = Math.min(ax2, bx2);
const overlapY2 = Math.min(ay2, by2);

// A ∩ B의 면적
const overlapArea = (overlapX2 > overlapX1 && overlapY2 > overlapY1) 
    ? (overlapX2 - overlapX1) * (overlapY2 - overlapY1)
    : 0;

// A의 네 분리된 영역 계산
const topHeight = ay2 - overlapY2;
const topArea = (topHeight > 0) ? (ax2 - ax1) * topHeight : 0;

const bottomHeight = overlapY1 - ay1;
const bottomArea = (bottomHeight > 0) ? (ax2 - ax1) * bottomHeight : 0;

const leftWidth = overlapX1 - ax1;
const leftArea = (leftWidth > 0) 
    ? leftWidth * (Math.min(ay2, overlapY2) - Math.max(ay1, overlapY1)) 
    : 0;

const rightWidth = ax2 - overlapX2;
const rightArea = (rightWidth > 0) 
    ? rightWidth * (Math.min(ay2, overlapY2) - Math.max(ay1, overlapY1)) 
    : 0;

// 남아있는 영역에서 최소 직사각형 범위
const minX = Math.min(ax1, overlapX1);
const maxX = Math.max(ax2, overlapX2);
const minY = Math.min(ay1, overlapY1);
const maxY = Math.max(ay2, overlapY2);

// 최소 직사각형 면적 계산
const remainingArea = topArea + bottomArea + leftArea + rightArea;
const result = (maxX - minX) * (maxY - minY);

console.log(result);