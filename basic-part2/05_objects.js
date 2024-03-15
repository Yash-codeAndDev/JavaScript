// Destructuring of objects

const course = {
    coursename: "javascript",
    price : "999",
    coursemode : "online", 
    courseInstructor : "yash"
}


// const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor:instructor} = course
console.log(instructor)

