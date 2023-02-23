function solution(s, t) {
  let answer = [];
  let p = 100;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }

  p = 100;
  for (let k = s.length - 1; k >= 0; k--) {
    if (s[k] !== t) {
      p++;
      // answer[k] > p ? (answer[k] = p) : "";
      answer[k] = Math.min(answer[k], p);
    } else {
      p = 0;
    }
  }
  return answer;
}

const s = "teachermode";
const t = "e";
console.log(solution(s, t));
