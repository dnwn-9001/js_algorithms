function solution(s) {
  let answer = 0;
  const str = s.toLowerCase();
  const matchStr = str.match(/[a-zA-Z]/g);

  const reverseStr = matchStr.reverse();
  let reverse = (original = "");

  for (let i = reverseStr.length - 1; i >= 0; i--) {
    reverse += reverseStr[i];
  }

  for (let j = 0; j < matchStr.length; j++) {
    original += matchStr[j];
  }

  if (reverse === original) answer = "YES";
  else answer = "NO";

  return answer;
}

const s = "emittime";
console.log(solution(s));
