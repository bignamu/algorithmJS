// https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
    let answer = 0;
    let cnt = 0;
    people.sort((a,b)=>
        b-a
    );
    
    let left = 0
    let right = people.length-1

    while (left<=right){
        if (people[left] + people[right]<=limit){
            left += 1
            right -= 1
            cnt += 1
            continue
        }
        
        left += 1
        cnt += 1
    }
    console.log(cnt)
    answer = cnt
    return answer;
}



let people = [40, 40, 40]
let limit = 100


solution(people,limit)