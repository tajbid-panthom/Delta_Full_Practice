function saveDB() {
  let internetSpeed = Math.floor(Math.random() * 8) + 1;
  return new Promise((res, rej) => {
    if (internetSpeed > 3) {
      res("Internet Speed is Good");
    } else {
      rej("Internet Speed is Bad");
    }
  });
}

saveDB()
  .then((res) => {
    console.log("Data 1 :", res);
    return saveDB();
  })
  .then((res) => {
    console.log("Data 2 :", res);
    return saveDB();
  })
  .then((res) => {
    console.log("Data 3 :", res);
    return saveDB();
  })
  .then((res) => {
    console.log("Data 4 :", res);
  })
  .catch((err) => {
    console.log(err);
  });
