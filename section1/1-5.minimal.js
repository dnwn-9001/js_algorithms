function solution(...arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  answer = min;
  return answer;
}

// console.log(solution(5, 3, 7, 2, 6, 15, 1));

// 내장함수로 최대값, 최솟값 구하기.
function solution2(arr) {
  //min에는 배열이 아닌 인자만 전달해야하기때문에 전개연산자 사용하기
  let answer = Math.min(...arr);
  return answer;
}
console.log(solution2([5, 3, 7, 2, 6, 15, 0]));
