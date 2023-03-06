function solution(a, b, c) {
  let max,
    answer = "YES";
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;
  if (sum - max <= max) answer = "NO";

  return answer;
}

console.log(solution(40, 30, 12));
