const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

// const personScheme = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model("Person", personScheme);

// const person = new Person({
//   name: "John",
//   age: 37,
// });

// person.save();

const fruitsSchema = new mongoose.Schema({
  name: String,
  rating: Number, //blueprint of database
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const berry = new Fruit({
  name: "berry",
  rating: 2,
  review: "berries are toxic",
});
berry.save();
// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "An apple a day keeps doctor away",
// });

// const orange = new Fruit({
//   name: "orange",
//   rating: 6,
//   review: "Oranges are rich in Vitamin C",
// });
// const banana = new Fruit({
//   name: "banana",
//   rating: 7,
//   review: "Bananas are rich in Phosphorus",
// });
// const mango = new Fruit({
//   name: "mango",
//   rating: 9,
//   review: "Mangos are king of fruits",
// });
// const pear = new Fruit({
//   name: "pear",
//   rating: 5,
//   review: "Pears cure Scurvy",
// });

// Fruit.insertMany([orange, banana, mango, pear], function (err) {
//   if (err) {
//     // to add multiple data into the database
//     console.log(err);
//   } else {
//     console.log("fruits saved successfully");
//   }
// });

// fruit.save();

//!adding validations
// const fruitsSchema = new mongoose.Schema({
//   //   name: {
//   //     type: String,
//   //     required: [true, "Name is required"],
//   //   },
//   name: String,
//   rating: {
//     type: Number,
//     min: 1,
//     max: 10,
//   },
//   review: String,
// });
// const Fruit = mongoose.model("Fruit", fruitsSchema);

// const fruit = new Fruit({
//   rating: 4,
//   review: "pineapples are tangi",
// });

// fruit.save();

//to find the data into databases
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     fruits.forEach(function (fruit) {
//       console.log(fruit.name);
//     });
//     // mongoose.connection.close();
//   }
// });

//? updating data

// Fruit.updateOne(
//   { _id: "6335cb6475de800bb76c53b4" },
//   { name: "pineapple" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Updated successfully");
//     }
//     mongoose.connection.close();
//   }
// );

//* deleting data
// Fruit.deleteOne({ _id: "6335cabbd79e53a4c4a72d49" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted successfully");
//   }
// });

//*deleting multiple entries

// Person.deleteMany({ name: "John" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted from peoples data");
//   }
// });

//! embedding doc and establishing relationships

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitsSchema,
});
const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Eren",
  age: 23,
});

person.save();
