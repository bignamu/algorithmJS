function solution(name) {
    var answer = 0;
    let len = name.length;
    let namelist = name.split('')
    
    let cur = 0;

    console.log(len,namelist,namelist.slice(-1)[0],cur)
    
    
    for(let i = 1; i<len;i++){
        let last = namelist.slice(-i)[0];
        console.log(last)
        namelist.unshift(last)
    }
    console.log(namelist);
    let stash = [];
    let cnt = 0;
    function change(start){
        let curname = namelist[start]
        stash.push(curname);
        if (curname != 'A'){
            
            let toA= curname.charCodeAt(0) - 'A'.charCodeAt(0);
            console.log(toA);
            cnt += toA;
            namelist[start] = 'A';
            
        }
        let front = start -1;
        let back = start +1;
        while (back < len*2-1){
            
        };

        
    }
    change(len-1,'change')
    console.log(cnt)
    
    return answer;
}


let name2 = 'JAN'
solution(name2)