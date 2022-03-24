function fizzBuzz(max) {
  var result = [];

  for(var i = 1; i < max; i += 1) {
    if((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
      result.push(i);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
