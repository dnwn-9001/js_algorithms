function solution(day, carNum) {
  let answer = 0;
  carNum.forEach((e) => {
    if (e % 10 === day) answer++;
  });

  return answer;
}

const arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(1, arr));
