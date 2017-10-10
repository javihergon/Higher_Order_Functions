  var people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21}
  ];
//   ```
//   1. Add the object representing yourself to this array of people (if your
//       `name` key does not have the same "shape" as the ones above, make sure you
//       change it to look like these).
people.push({name: {first: 'Javier', middle: 'H.', last: 'Gonzalez'}, age: 46});

//   2. Write a function that, when passed an array of *people* (person objects) as
//       an argument, returns an array of their **full names**. Can you make use of
//       your `fullName` function here?

// function fullName (array) {
//   newArray = [];
//   for(var i = 0; i < array.length; i++) {
//     person = array[i].name;
//     if (person.middle === undefined) {
//       person.middle = '';
//     }else {
//       person.middle = person.middle + ' ';
//     }
//     newArray.push(person.first + ' ' + person.middle + person.last);
//   }
//   return newArray; 
// }
// fullName (people);

//   3. Write a function that finds the average age of the `people` array.

var sum = function (array) {
  // for(var i = 0; i < array.length; i++) {
  //   sum += array[i].age;
  // }
  // return parseFloat((sum / array.length).toFixed(2));
    return array.reduce(function(acc, person){
      return acc + person.age;
  }, 0);
};

function average(array){
    return parseFloat((sum(array) / array.length).toFixed(2));
  }
  
 
average(people); //==> 35.33