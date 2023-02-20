function solution(n, aArr, bArr) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    if (aArr[i] > bArr[i]) {
      if (aArr[i] === 3) {
        bArr[i] === 2 ? answer.push("A") : answer.push("B");
      } else answer.push("A");
    } else if (aArr[i] === bArr[i]) answer.push("D");
    else answer.push("B");
  }

  return answer;
}

//1:가위, 2:바위, 3:보
const aArr = [2, 3, 3, 1, 3];
const bArr = [1, 1, 2, 2, 1];
console.log(solution(5, aArr, bArr));
