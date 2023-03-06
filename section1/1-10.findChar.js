function solution(string, char) {
  let answer = string.split(char).length;
  //   let answer = 0;
  //   for (let x of string) {
  //     if (x === char) answer++;
  //   }

  return answer - 1;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
