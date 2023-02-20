function solution(scoreArr) {
  //   const answer = [];
  //   for (let i = 0; i < scoreArr.length; i++) {
  //     let grade = 1;
  //     for (let j = 0; j < scoreArr.length; j++) {
  //       if (scoreArr[j] > scoreArr[i]) grade++;
  //     }
  //     answer.push(grade);
  //   }
  // 강의풀이
  const len = scoreArr.length;
  const answer = Array.from({ length: len }, () => 1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (scoreArr[j] > scoreArr[i]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
