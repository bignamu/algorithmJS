// https://programmers.co.kr/learn/courses/30/lessons/42861


function solution(n, costs) {
    let answer = 0;
    
    let visited = Array.from({length:n+1},()=>0);
    let nodetable = Array.from({length:n+1},()=>Infinity);
    let ans_min = Infinity;
    nodetable[0] = 0
    console.log(visited);
    console.log(nodetable);
    
    
    return answer;
}



let n = 4
let costs = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]
// 4

solution(n,costs)

