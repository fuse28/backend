const getUser = (user) => {};

getRepositories((repos) => {
  console.log("repos:", repos);
});

function getRepositories(callback) {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3", "repo4"]);
  }, 2000);
}

//!solving callback hell through promises

function getRepositories(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3", "repo4"]);
      reject(new Error("error"));
    }, 2000);
  });
}

getRepositories()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
