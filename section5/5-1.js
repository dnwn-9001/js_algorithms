function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  //sort는 시간 복잡도가 n*logn이 돼서 더 커짐.
  //   answer = arr1.concat(arr2);
  //   answer.sort();
  return answer;
}

const arr1 = [1, 3, 5, 8, 11, 13];
const arr2 = [2, 3, 6, 7, 10];

console.log(solution(arr1, arr2));
