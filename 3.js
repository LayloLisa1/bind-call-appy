function shortestWord(sentence) {
    var words = sentence.split(' ');
    var shortest = '';
  
    for (var i = 0; i < words.length; i++) {
      if (shortest === '' || words[i].length < shortest.length) {
        shortest = words[i];
      }
    }
  
    return shortest;
  }
  var sentence = "Men Najot Ta'limda uqiyman";
  console.log(shortestWord(sentence)); 

  var sentenceBind = "Men dasturlash va ingliz tiliga qiziqaman";
  var boundFunction = shortestWord.bind(null, sentenceBind);
  console.log(boundFunction()); 
  
  var sentenceCall = "Yov hammaga salom";
  console.log(shortestWord.call(null, sentenceCall)); 
  
  var sentenceApply = "Bu jumla ichidagi eng qisqa so'zni topish";
  console.log(shortestWord.apply(null, [sentenceApply])); 
  