const student1 = {
  name: "Tajbid",
  age: 21,
  phy: 95,
  math: 92,
  bio: 90,
  getAvg() {
    return (this.phy + this.math + this.bio) / 3;
  },
};
const student2 = {
  name: "Tajbid",
  age: 21,
  phy: 95,
  math: 92,
  bio: 90,
  getAvg: () => {
    // Access properties directly from the `student` object
    return (student2.phy + student2.math + student2.bio) / 3;
  },
};

console.log(student1.getAvg()); // Output: 92.33333333333333
console.log(student2.getAvg());

const squre = (n) => n ** 2;
console.log(squre(5));

const x = setInterval(() => {
  console.log("Hello World");
}, 2000);
