function getTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}
function sum(arr) {
  let ans = arr.reduce((a, c) => a + c);
  return ans;
}
export { getTicket, sum };
