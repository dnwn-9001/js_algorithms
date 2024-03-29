function solution(str1, str2) {
  let answer = "YES";
  const map = new Map();

  for (let x of str1) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }

  console.log(map);

  for (let x of str2) {
    if (!map.has(x) || map.get(x) === 0) return "NO";
    else map.set(x, map.get(x) - 1);
  }

  // let map1 = new Map();
  // let map2 = new Map();

  // for (let x of str1) {
  //   map1.has(x) ? map1.set(x, map1.get(x) + 1) : map1.set(x, 1);
  // }

  // for (let x of str2) {
  //   map2.has(x) ? map2.set(x, map2.get(x) + 1) : map2.set(x, 1);
  // }

  // for (let [key, val] of map1) {
  //   if (val === map2.get(key)) answer = "YES";
  //   else answer = "NO";
  // }

  return answer;
}

const str1 = "abaCC";
const str2 = "CCaab";

console.log(solution(str1, str2));
