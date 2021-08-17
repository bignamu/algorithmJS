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
    
    function change(start){
        
        if (curname != 'A'){
            
        }
        
    }
    
    return answer;
}


let name2 = 'JAN'
solution(name2)