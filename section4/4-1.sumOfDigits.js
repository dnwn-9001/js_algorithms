// 자릿수의 합
function solution(arr) {
  let answer,
    sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    //강의 풀이
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    // const str = x.toString();
    // sum = 0;

    // for (let i = 0; i < str.length; i++) {
    //   sum += Number.parseInt(str[i]);
    // }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) answer = Math.max(answer, x);
  }

  return answer;
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
