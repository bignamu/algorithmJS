function bfs(row, col, h, w, city){
  dx = [0, 0, 1, -1]
  dy = [1, -1, 0, 0]

  q = []
  q.push([row, col, 0]);
  
  visited = []
  for(let i = 0; i < h; i++){
      visited.push([]);
      for(let j = 0; j < w; j++){
          visited[i].push(0);
      }
  }
  answer = 0;
  while(q){

      let tmp = q.shift();
      r = tmp[0];
      c = tmp[1];
      cost = tmp[2];
      
      if(city[r][c] == 0){
          answer = cost;
          break;
      }

      for(let i = 0; i < 4; i++){
          nr = r + dx[i];
          nc = c + dy[i];
          if(nr >= 0 && nr < h && nc >=0 && nr < w){
              q.push([nr, nc, cost + 1]);
          }
      }
  }
  return answer;
}

function solution(number, city){
  h = city.length;
  w = city[0].length;
  
  for(let i = 0; i < h; i++){
      number.push([]);
  }

  

  for(let i = 0; i < h; i++){
      for(let j = 0; j < w; j++){
          if(city[i][j] == 1){
              dist = bfs(i, j, h, w, city);
              number[i][j] = dist;
          }
          else{
              number[i][j] = 0;
          }
      }
  }
  console.log(number)
  return number
}