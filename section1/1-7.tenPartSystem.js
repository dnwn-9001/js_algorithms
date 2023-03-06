function solution(day, carNumArr) {
  let answer = 0;
  for (let x of carNumArr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
