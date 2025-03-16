let arr = [1, 2, 3, 4, 5, 6, 7];
const squre = arr.map((ele) => ele * ele);
console.log(squre);

const sum = arr.reduce((acc, ele) => acc + ele, 0);
console.log(sum);
console.log(sum / arr.length);

const plus_five = arr.map((ele) => ele + 5);
console.log(plus_five);

const strArr = ["Tajbid", "HOSSAIN", "bappi", "Md"];
const upperCase = strArr.filter((ele) => ele == ele.toUpperCase());
console.log(upperCase);

const doubleAndReturnArgs = (arr, num) => {
  _new_arr = arr.map((ele) => ele + num);
  return [...arr, ..._new_arr];
};
console.log(doubleAndReturnArgs(arr, 10));

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

console.log(
  mergeObjects({ name: "Tajbid", id: 230235 }, { discipline: "CSE" })
);
