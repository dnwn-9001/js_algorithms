function solution(s) {
  let answer = 0;
  // const numArr = s.match(/[0-9]/g);
  // let num = 0;
  // for (let i = 0; i < numArr.length; i++) {
  //   num += numArr[i];
  // }
  // answer = Number.parseInt(num);

  //다시
  s = s.replace(/[^0-9]/g, "");
  answer = parseInt(s);

  //강의 풀이(parseInt 사용)
  // for (let x of s) {
  //   if (!isNaN(x)) answer += x;
  // }

  // return parseInt(answer);

  //강의 풀이(parseInt 미사용)
  // for (let x of s) {
  //   if (!isNaN(x)) answer = answer * 10 + Number(x);
  // }

  return answer;
}

const s = "g0en2T0s8eSoft";
console.log(solution(s));
