
let courses = ["Javascript", "Java", "Angular", "React"];// Pre-definedarray of courses
courses.length = 10;

courses[4]= "Typescript";
courses[5]= "Vue"

console.log("Number of courses available: "+ courses); 
//Check if the array is an object or string
console.log(typeof courses);

//Injecting multiple values into single array
courses.push("c++", "Flutter", "C#", "Python")
console.log("New semester courses: " +courses)
//Check if the array is an array method
console.log(` coursers are: ${courses instanceof Array}`);



let faculty= courses.toString();
console.log(` coursers are: ${courses instanceof Array}`);
console.log("Coursesas string" , faculty );
console.log(typeof faculty)
console.log(faculty.toUpperCase());

let learners= new Array() // Undeined arrays

learners[0]=1;
learners[1]=2;
learners[2]=3;
learners[3]=4;
learners[4]=5;

console.log("Total number of learners: " ,learners.length)