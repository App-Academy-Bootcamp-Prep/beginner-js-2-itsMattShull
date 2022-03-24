function reverseSentence(sentence) {
  var sentenceArray = sentence.split(" ");
  var reversed = [];

  while(sentenceArray.length > 0) {
    reversed.push(sentenceArray.pop());
  }

  return reversed.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
