let array = ["JavaScript", "PHP", "Ruby"];

// let a = array[0];
// let b = array[1];
// let c = array[2];

// console.log(a, b, c);
// Cach bth

// let [a, b, c] = array;
// console.log(a, b, c);
// let [d, , e] = array;
// console.log(d, e);
// Destructuring

let [f, ...rest] = array;
console.log(f);
// Output: JavaScript
console.log(rest);
// Ouput = ["PHP", "Ruby"]

let course = {
  name: "JavaScript",
  price: 200,
  children: {
    name: "ReactJS",
  },
};

let {
  name: parentName,
  children: { name },
} = course;
console.log(name);
Output: ReactJS;
