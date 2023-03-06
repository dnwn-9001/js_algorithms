function solution(s) {
  let answer = "";
  // answer = s.toUpperCase();
  for (let x of s) {
    // 아스키 코드 방법
    // let num = x.charCodeAt();
    // if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    // else answer += String.fromCharCode(num);
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

console.log(solution("I am Youngin apple"));
