function solution(arr) {
  let answer = [];
  for (const x of arr) {
    const str = x.toString().split("").reverse().join("");
    const reverseNum = Number.parseInt(str);
    if (findPrimeNum(reverseNum) === 0) answer.push(reverseNum);
  }
  return answer;
}

function findPrimeNum(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) cnt++;
  }
  if (cnt === 2) return 0;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
