function solution(n, lost, reserve) {
    let answer = 0;
    lost.sort()
    reserve.sort()
    let re = new Set(reserve)
    let lo = new Set(lost)
    // console.log('reserve',...re)
    // console.log('lost',...lo)
    let diff = new Set([...re].filter(x => !lo.has(x)));
    let diff2 = new Set([...lo].filter(x => !re.has(x)));
    
    // console.log(n-diff.size)
    let cnt = 0
    for (let uni of diff2){
        let front = uni - 1
        let tail = uni + 1
        
        if (diff.has(front)){
            diff.delete(front)
            cnt += 1    
        }
        else if (diff.has(tail)){
            diff.delete(tail)
            cnt += 1
        }
    }
    
    
    answer = cnt + n - diff2.size
    console.log(answer)
    return answer;
}
let n, lost, reserve
n = 5
lost = [2,4]
reserve = [3,1]
solution(n,lost,reserve)