function solution(number, k) {
    let answer = '';
    let judge = number.slice(0,1);
    number = number.slice(1,number.length);
    let stk = [judge];
    while (number){
        judge = number[0];
        number = number.slice(1,number.length);
        
        stk.push(judge);        

        if (stk[stk.length-2] < stk[stk.length-1] && k > 0){
            stk.splice(stk.length-2,1)
            k -= 1
        }

        
        // console.log(...stk,k)
        // break
        
    }
    // console.log(...stk);
    let i = 0
    while (k >0){
        if (stk[i] < stk[i+1]){
            stk.splice(i,1)
            k -= 1
            i += 1
        } else if (stk[i] > stk[i+1]){
            stk.splice(i+1,1)
            k -= 1
            i += 1
        }
    }
    // console.log(...stk);
    answer = stk.join('')
    
    

    return answer;
    }


let number = "1231234"
let k = 3
solution(number,k)