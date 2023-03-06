// 내 풀이
// function solution(s) {
//   let answer = 0;
//   const arr = s.match(/[A-Z]/g);
//   for (let i = 0; i < arr.length; i++) {
//     answer++;
//   }

//   return answer;
// }

const s = "KoreaTimeGood";
console.log(solution(s));

function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

//아스키 코드를 이용한 방법
// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     const a = x.charCodeAt();
//     if (a >= 65 && a <= 90) answer++;
//   }
//   return answer;
// }
