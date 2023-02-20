function solution(resultArr) {
  let answer = 0,
    cnt = 0;
  for (let x of resultArr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}

const resultArr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(resultArr));
