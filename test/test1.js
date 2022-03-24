var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var range = tryRequire('../problems/1_range.js');
var reverseSentence = tryRequire(`../problems/2_reverse_sentence.js`);
var unique = tryRequire(`../problems/3_unique.js`);
var fizzBuzz = tryRequire(`../problems/4_fizz_buzz.js`);
var stringRange = tryRequire(`../problems/5_string_range.js`);

describe('range()', function () {
  it('should return array of numbers between "start" and "end"', function () {
    var result = range(1, 5);
    var expected = [1,2,3,4,5];

    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });

  it('should return empty array if "start" > "end"', function () {
    assert.equal(range(5, 1).length, 0);
  });
});
