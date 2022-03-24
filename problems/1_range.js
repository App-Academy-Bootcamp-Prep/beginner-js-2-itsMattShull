function range(start, end) {
  var array = [];

  for(var i = start; i <= end; i += 1) {
    array.push(i);
  }

  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
