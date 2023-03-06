// function solution(n, ...string) {
//   let answer = "";
//   let count = Number.MIN_SAFE_INTEGER;
//   for (i = 0; i < n; i++) {
//     if (string[i].length > count) {
//       count = string[i].length;
//       answer = string[i];
//     }
//   }
//   return answer;
// }

console.log(
  solution(["teacher", "time", "student", "beautiful", "goodzzzzzzzzz"])
);

function solution(strArr) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;

  for (let x of strArr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
