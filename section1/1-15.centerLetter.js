function solution(s) {
  let answer = "";
  const midIndex = Math.floor(s.length / 2);
  if (s.length % 2 === 1) {
    answer = s.substring(midIndex, midIndex + 1);
  } else {
    answer = s.substring(midIndex - 1, midIndex + 1);
  }

  return answer;
}

console.log(solution("good"));
