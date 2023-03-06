function findMinimum(a, b, c) {
  let answer = 0;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

const result = findMinimum(9, 10, 11);
console.log(result);
