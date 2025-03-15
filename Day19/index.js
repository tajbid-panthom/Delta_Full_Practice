let arr = [1, 5, 2, 7, 8, 9];

const checkElements = (arr, val) => {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      a.push(arr[i]);
    }
  }
  return a;
};
console.log(checkElements(arr, 5));

let str = "abcdabcdefgggh";
let alpha = new Array(26).fill(0);

for (let i = 0; i < str.length; i++) {
  if (str[i] >= "a" && str[i] <= "z") {
    console.log(str.charCodeAt(i));
    alpha[str.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
}

let res = "";

for (let i = 0; i < alpha.length; i++) {
  if (alpha[i] !== 0) {
    res += String.fromCharCode(i + "a".charCodeAt(0));
  }
}

console.log(res); //O(n)

ans = "";
for (let i = 0; i < str.length; i++) {
  if (ans.indexOf(str[i]) == -1) {
    ans += str[i];
  }
}
console.log(ans); //O(n^2)

let country = ["Australia", "Germany", "United States of America"];
const answer = (country) => {
  let res = country[0];
  let len = country[0].length;
  for (let i = 0; i < country.length; i++) {
    if (len < country[i].length) {
      len = country[i].length;
      res = country[i];
    }
  }
  return res;
};
console.log(answer(country));

let count = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  )
    count++;
}
console.log(count);
let s = 0;
for (let i of str) {
  if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
    s++;
  }
}
console.log(s);

const range = (start, end) => {
  return Math.floor(Math.random() * (end - start) + start);
};

console.log(range(10, 20));
