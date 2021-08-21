//https://www.acmicpc.net/problem/1969

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let board = [];
rl.on("line", (line) => {
  if (!n && !m) {
    [n, m] = line.split(" ").map((x) => +x);
  } else {
    board.push(line.split(''));
    if (board.length === n) rl.close();
  }
});

rl.on("close", () => {
  console.log(board);
  console.log(n,m)
});