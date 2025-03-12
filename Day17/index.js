let list = [];
let req = prompt("Enter operations");
while (true) {
  if (req == "quit") {
    console.log("Quitting the app");
    break;
  }
  if (req == "list") {
    for (let i of list) {
      console.log(i);
    }
  }
  if (req == "add") {
    let item = prompt("Enter item to add");
    list.push(item);
  }
  if (req == "delete") {
    let item = prompt("Enter item to delete");
    list.splice(list.indexOf(item), 1);
  }
  req = prompt("Enter operations");
}
