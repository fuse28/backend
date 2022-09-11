//calling a promise which is already resolved

const res = Promise.resolve({ id: 1, name: "Aatish" });
res.then((result) => console.log(result));

//calling a promise which is already rejected

const rej = Promise.reject(new Error("error"));
rej.catch((err) => console.log(new Error(err)));

//running two promises parallely
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("fetching facebook api...");
    resolve(1);
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("fetching twitter api...");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then((result) => {
  console.log(result);
});
