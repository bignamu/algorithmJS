function solution(number, k) {
    let answer = '';
    
    let stack = [number[0]]
    // console.log(...stack)
    // console.log(number.slice(1,number.length))
    for (let num of number.slice(1,number.length)){
        while (stack.length > 0 && stack[stack.length-1] < num && k > 0){
            k -= 1
            stack.pop()
        }

        stack.push(num)
    }
    if (k != 0){
        stack = stack.slice(0,-k)
        console.log(...stack)
    }

    console.log(...stack)

    answer = stack.join('')
    return answer;
    }


let number = "1000"
let k = 1
solution(number,k)