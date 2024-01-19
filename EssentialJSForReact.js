//Destructuring
const obj = {
  name: "John",
  age: 25,
  City: "Noida",
  Country: "India",
  Skills: ["HTML", "CSS", "JavaScript"],
};

const { name, age, City, Country, Skills } = obj;
console.log(name, age, City, Country, Skills[0]); //this is ho we can easily access object properties using destructuring

//Rest and Spread Operator
//Rest Operator=>
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 90, 2, 1];

const [...array] = arr;
console.log(array);
const student = {
  fullName: "Rohan Singh",
  Language: "English",
  city: "Delhi",
  Age: 25,
};
const { fullName, Language, ...info } = student;
console.log(fullName, Language, info); //this is how we can use Rest Operator

//Sperad Operator
const fruits = ["Orange", "papaya", "Kiwi", "cherry", "Apple"];
console.log(...fruits); //this is how we can use spread operator to unpack the values

const employee = {
  fName: "Kiran",
  EAge: 23,
  city: "Gurgaon",
  Language: "Hindi",
};
const { fName, EAge, ...details } = employee;
console.log({ fName, EAge, ...details }); //so this is how we can use rest and sperad operator over Object

//template literals
let book = "My Fantasy";
let author = `Devid karon`;
let publishDate = 2003;
let publishedBook = `A new book ${book} which is written by ${author} ${publishDate}`;
console.log(publishedBook); //So this is how We can use template Literals in js for manupulating variables

//Ternary operator instead of if/else
let count = 5;
let result = count < 4 ? "True" : "false"; //if = True, else = false
console.log(result);

const fruit = "Apple";
const friutName =
  fruit === "Papaya"
    ? "Yes it is papaya"
    : `No it is not papaya it is - ${fruit}`;
console.log(friutName); //so this is how we use ternary operator for simplicity

//Arrow function
const getYear = () => new Date().toDateString();
console.log(getYear());

const greet = () => "Hello World";
console.log(greet()); //So this is how we can use Arrow function

//short circuiting and logical operators ??, &&, ||
//short circuiting &&
console.log(true && "some string"); //some string => becuase it always see flase value and returns it so it is quite helpful in if
console.log(false && "some string"); //false

//short circuiting || or operator
console.log(true || "some string"); //true => because it first looks for truthy value and returns it
console.log(false || "some String"); //some string
console.log(null || "Some String"); //returns truthy value and ignores false value -> null, undefined, 0, "";
