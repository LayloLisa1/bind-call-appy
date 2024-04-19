function countWordsWithLetterA(inputString) {
    const words = inputString.split(' ');
    let count = 0;
    words.forEach(word => {
      if (word.includes('a')) {
        count++;
      }
    });
    return count;
  }
  const inputString = "Bu jumla ichidagi eng a harfiga ega so'zni topish";
  console.log(countWordsWithLetterA(inputString)); 
  const boundFunction = countWordsWithLetterA.bind(null, inputString);
  console.log(boundFunction()); 
  console.log(countWordsWithLetterA.apply(null, [inputString])); 
  console.log(countWordsWithLetterA.call(null, inputString));