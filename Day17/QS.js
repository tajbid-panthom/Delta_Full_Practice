// qs1
let arr = [1, 2, 43, 2, 3, 5, 2, 5, 6, 8];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 2) {
    arr.splice(i, 1);
  }
}
console.log(arr);

// qs2 & qs3
let num = 287152;
let count = 0;
let c = 0;
while (num != 0) {
  c++;
  count += num % 10;
  num = parseInt(num / 10);
}
console.log(count, c);

//qs4
let n = 7;
let mul = 1;
for (let i = 1; i <= n; i++) {
  mul *= i;
}
console.log(mul);

//qs5
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > min) {
    min = arr[i];
  }
}
console.log(min);
