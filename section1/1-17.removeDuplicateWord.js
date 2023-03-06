function solution(wordArr) {
  let answer = [];
  //   for (let x of wordArr) {
  //     if (answer.indexOf(x) === -1) answer.push(x);
  //   }
  answer = wordArr.filter((v, i) => {
    return wordArr.indexOf(v) === i;
  });
  return answer;
}

console.log(
  solution(["good", "time", "good", "time", "student", "good", "student"])
);
