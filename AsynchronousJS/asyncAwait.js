async function getNumber(num1, num2) {
  //try catch block to catch error in async and await
  try {
    console.log(num1);
    console.log(num2);
  } catch (error) {
    console.log(error);
  }
}
getNumber(1, 2);
