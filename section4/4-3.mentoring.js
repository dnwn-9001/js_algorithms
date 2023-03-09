function solution(arr) {
  let answer = 0;
  let numCases = new Set();
  for (const x of arr) {
    for (let i = 0; i < x.length; i++) {
      for (let j = 1; j < x.length; j++) {
        if (j > i) numCases.add([x[i], x[j]]);
      }
    }
  }

  for (let i = 0; i < numCases.length; i++) {}

  console.log(numCases);

  return answer;
}

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
