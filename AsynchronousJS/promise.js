const p = new Promise((resolve, reject) => {
  //!async ops
  setTimeout(() => {
    // resolve(1);
    reject(new Error("error occurred"));
  }, 2000);
});
p.then((result) => console.log(result)).catch((err) =>
  console.log("Error", err.message)
);
