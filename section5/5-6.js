function solution(s) {
  let answer = "";
  let map = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }

  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

const s = "BACBACCACCBDEDE";

console.log(solution(s));
