var sampleInput = [ [1, 3, 2], [4, 23, 100], [-7, -6, -3, -2]];

var each = function(coll, callback) {
	if(Array.isArray(coll)) {
		for(var i = 0; i < coll.length; i++) {
			callback(coll[i], i);
		}
	}else{
		for(var key in coll) {
			callback(coll[key], key);
		}
	}
};

function map(coll, f) {
	var acc = [];
	each(coll, function(number, key) {
		acc.push(f(number, key));
	});
	return acc;
}

function concat(array) {
 var newArray = [];
 each (array, function(innerArray) {
   each (innerArray, function(element) {
     newArray.push(element);
   });
 });
 return newArray;
}

concat(sampleInput); //==> [ 1, 3, 2, 4, 23, 100, -7, -6, -3, -2 ]

var maximus = function (array) {
    var max = array[0];                     //Initial element is the first item in the array  // This is reduce
    each(array, function(b) {
            if(b > max){
              max = b;
            }
    });
    return max;
};

map(sampleInput, maximus); //==> [ 3, 100, -2 ]

//Return an Array of Array with their values doubled

function double (num) {
  return num * 2;
}
var doubled = function(array){
 var newArray = [];
 each(array, function(innerArray) {
  // var doubleNum = [];
  // var doubleNum = map(innerArray, function(value) {
  //     return double(value);
  // });
    // for(var i = 0; i < innerArray.length; i++) {
    //   doubleNum.push(double(innerArray[i]));
    // }
  newArray.push(map(innerArray, function(value) {
      return double(value);}));
 }); 
 return newArray;
};

doubled(sampleInput); //=> [ [ 2, 6, 4 ], [ 8, 46, 200 ], [ -14, -12, -6, -4 ] ]
