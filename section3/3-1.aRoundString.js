function solution(s) {
  let answer = "";
  const str = s.toLowerCase();
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (str === reverseStr) answer = "YES";
  else answer = "NO";

  return answer;
}

const s = "ggooggqqq";
console.log(solution(s));
