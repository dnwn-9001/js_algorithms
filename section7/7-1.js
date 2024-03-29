function solution(arr) {
  let idx = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return arr;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
