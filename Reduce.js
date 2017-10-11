function each(coll, func){
      if(Array.isArray(coll)) {
        for(var i = 0; i < coll.length; i++){
            func(coll[i]);
        }
      } else if (typeof coll === 'object')
        for(var key in coll){
            func(coll[key]);
      }
}

function reduce(coll, func, acc) {
  if(acc === undefined) {
    acc = coll.shift(); // coll[0];   Trying to figure out when coll is object and acc is undefined
    each(coll, function(value) {
      acc = func(acc, value);
    });
    return acc;
  } else {
    each(coll, function(value) {
      acc = func(acc, value);
    });
    return acc;
  }
}

function sum(result, value) {
      return result + value;
}
reduce([1,2,3,4], sum);


function biggerNumber(result, value){
      if(result > value) {
      return result;
      }else {
      return value;
      }
}
reduce([1,2,3,4], biggerNumber); //==> 4
reduce({a:1,b:2,c:3,d:4}, biggerNumber, 1); //==> 4