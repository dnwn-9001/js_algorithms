function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    let grade = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) grade++;
    }
    answer.push(grade);
  }

  return answer;
}

const arr = [92, 92, 92, 100, 76];
console.log(solution(arr));
