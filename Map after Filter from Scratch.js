  var people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21}
  ];

//   1. Add the object representing yourself to this array of people (if your
//       `name` key does not have the same "shape" as the ones above, make sure you
//       change it to look like these).
people.push({name: {first: 'Javier', middle: 'H.', last: 'Gonzalez'}, age: 46});

//   4. Write a function that, when given *people* and an *age* as arguments,
//       returns an array of just the people that are older than the specified age.


// var older = function(array, num) {
//   return array.filter(function(obj) {
//     return obj.age > num;
//   }).map(function (obj){
//     return obj.name;
//   });
// };

// older(people, 30);

//Example with EACH, MAP and FILTER from SCRATCH

function each(coll, callback) {
  if(Array.isArray(coll)) {
    for(var i = 0; i < coll.length; i++) {
      callback(coll[i], i);
    }
  } else {
    if(typeof(coll) === 'object') {
      for(var key in coll) {
        callback(coll[key], key);
      }
    }  
  }
}

function map(coll, callback){
  var acc = [];
  each(coll, function(element) {
    acc.push(callback(element));
  });
  return acc;
}

function filter(coll, test) {
  var acc = []; 
  each(coll, function(element) {
    if(test(element)) {
      acc.push(element);
    }
  });
  return acc;
}

var older = function (array, num) {
    return filter(array, function(person) {
        return person.age > num;
    });
};

older(people, 40); 

// MAP to return only names of the people older than...

map(older(people, 40), function(person) {
     return person.name;
});








