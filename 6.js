const sumDigits = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return Array.from(String(sum), Number);
  }
  const numbers = [1, 22, 3];
  console.log(sumDigits(numbers)); 
  const boundFunction = sumDigits.bind(null, numbers);
  console.log(boundFunction());
  console.log(sumDigits.apply(null, [numbers]));
  console.log(sumDigits.call(null, numbers)); 
  