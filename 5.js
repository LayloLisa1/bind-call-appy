function countNumbers(inputString) {
    var regex = /\d/g;
 // bu yerdagi /\d/g javascriptda regular ifoda deyiladi. Bu raqamlar va belgilarni topish uvhun ishlatiladi.
    var matches = inputString.match(regex);
    return matches ? matches.length : 0;
  }
  var inputString = "Bu 1 jumla 23 ichida 456 nechta 78910 raqam borligini aniqlash uchun";
  console.log(countNumbers(inputString));
  var boundFunction = countNumbers.bind(null, inputString);
  console.log(boundFunction()); 
  console.log(countNumbers.apply(null, [inputString]));
  console.log(countNumbers.call(null, inputString)); 
  