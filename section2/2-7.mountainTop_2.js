function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const nx = [-1, 0, 1, 0];
  const ny = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        const x = i + nx[k];
        const y = j + ny[k];
        if (x >= 0 && x < n && y >= 0 && y < n && arr[x][y] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
