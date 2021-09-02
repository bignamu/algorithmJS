// https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
    let answer = 0;
    let cnt = 0;
    people.sort((a,b)=>
        b-a
    );
    
    // console.log(people)
    

    while (people.length>0){
        let popped = people.shift();
        let flag = false;
        let want = limit - popped
        for (let i = 0;i<people.length;i++){
            if (people[i] <= want){
                people.splice(i,1)
                cnt += 1
                flag = true;
                break
            }
            
        }
        if (flag){
            continue
        } else if (!flag){
            cnt += 1
        }
        
    }


    // console.log(people,cnt)
    answer = cnt
    return answer;
}



let people = [70, 50, 80, 50]
let limit = 100


solution(people,limit)