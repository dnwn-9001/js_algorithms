function solution(arr) {
  let answer = arr;
  const sum = answer.reduce((acc, val) => acc + val, 0);

  for (i = 0; i < answer.length - 1; i++) {
    for (j = i + 1; j < answer.length; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
