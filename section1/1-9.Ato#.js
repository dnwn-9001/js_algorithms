// 나는 배열로 할당한 뒤 했는데 이렇게 할 필요없음
// function solution(word) {
//   const charArr = Array.from(word);
//   for (let i = 0; i < charArr.length; i++) {
//     if (charArr[i] === "A") {
//       charArr.splice(i, 1, "#");
//     }
//   }
//   return charArr.join("");
// }

console.log(solution("BANANA"));

//강의 해답 두 가지.
// 1)
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === "A") answer += "#";
//     else answer += x;
//   }
//   return answer;
// }

//2)
function solution(s) {
  let answer = s;
  //   answer = answer.replaceAll("A", "#");
  answer = answer.replace(/A/g, "#");

  return answer;
}
