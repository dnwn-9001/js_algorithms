function solution(arr) {
  let answer = 0;
  const n = arr.length;
  //   for (let i = 0; i < n; i++) {
  //     arr[i].splice(n, 0, 0);
  //     arr[i].splice(0, 0, 0);
  //   }
  //   const mountainArr = Array.from({ length: n + 2 }, () => [
  //     0, 0, 0, 0, 0, 0, 0,
  //   ]);
  //   mountainArr.splice(1, n, ...arr);

  //   for (let i = 0; i < mountainArr.length; i++) {
  //     for (let j = 0; j < mountainArr.length; j++) {
  //       if (mountainArr[i][j] !== 0) {
  //         if (
  //           mountainArr[i][j] > mountainArr[i - 1][j] &&
  //           mountainArr[i][j] > mountainArr[i + 1][j] &&
  //           mountainArr[i][j] > mountainArr[i][j - 1] &&
  //           mountainArr[i][j] > mountainArr[i][j + 1]
  //         ) {
  //           answer++;
  //         }
  //       }
  //     }
  //   }

  // 강의 풀이
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let x = i + dx[k];
        let y = j + dy[k];

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
console.log("answer", solution(arr));
