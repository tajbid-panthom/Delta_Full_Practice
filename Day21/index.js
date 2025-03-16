let arr = [1, 4, 3, 5, 2, 5, 32, 3, 3];
console.log(Math.min(...arr));
const _min = arr.reduce((min, ele) => {
  if (ele < min) return ele;
  else return min;
});
console.log(_min);
console.log(...arr);

let check = arr.every((ele) => {
  ele % 10 == 0;
});
console.log(check);
