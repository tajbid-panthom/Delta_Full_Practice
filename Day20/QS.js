const arrayAvg = (arr) => {
  let sum = arr.reduce((acc, ele) => acc + ele, 1);
  return sum / arr.length;
};
console.log(arrayAvg([1, 2, 3, 4, 5])); //3

const Even = (n) => n % 2 == 0;
console.log(Even(5)); //false
