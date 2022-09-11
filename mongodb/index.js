const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log("could'nt connect to mongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema); // param1->singular name of the object param2-> shape of document in the collection

async function createCourse() {
  const course = new Course({
    name: "React.js Course",
    author: "Mosh",
    tags: ["React", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}
createCourse();

async function getCourses() {
  const courses = await Course.find({ author: "Mosh", isPublished: true })
    // .find({ price: { $gte: 10, $lte: 20 } }) //using comparision operators
    .or([{ author: "Mosh" }, { isPublished: true }]) //and operator is also the same

    .limit(10)
    .sort({ name: 1 }) //1 for ascending order -1 for descending order
    .select({ name: 1, tags: 1 }); //returns thr property of the object
  console.log(courses);
}
getCourses();

//!comparision operators on mongoDB
// eq(equal)
// ne(not equal)
//gt(greater than)
// gte(greater than or equal to)
// lt(less than)
// lte(less than or equal to)
// in
// nin(not in)

//!logical operators
//or
//and

//? regular expression

// .find({author:/^Mosh/}) //to have all the results starting with mosh
// .find({author:/Hamedani$/}) //to have all the results ending with mosh //it is case sensitive

// .find({author:/Hamedani$/i}) to make it case insensitive

//query containing Mosh

// .find({author:/.*Mosh.*/})
