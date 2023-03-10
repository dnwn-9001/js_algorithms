// function solution(arr) {
//   let dwarfs = [];
//   const sum = arr.reduce((acc, v) => acc + v);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         sum - (arr[i] + arr[j]) === 100
//           ? (dwarfs = arr.filter((e) => e !== arr[i] && e !== arr[j]))
//           : "";
//       }
//     }
//   }
//   return dwarfs;
// }

const heightOfDwarfs = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(heightOfDwarfs));

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}
