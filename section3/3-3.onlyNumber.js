function solution(s) {
  let answer = 0;
  const numArr = s.match(/[0-9]/g);
  let num = 0;
  for (let i = 0; i < numArr.length; i++) {
    num += numArr[i];
  }
  answer = Number.parseInt(num);
  return answer;
}

const s = "g0e1n2T0s8eSo1f7t";
console.log(solution(s));
