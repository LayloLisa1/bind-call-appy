function findExponent(n, k) {
    return Math.pow(2, k);
  }  
  const n = 8;
  const k = 3;
  const boundFunction = findExponent.bind(null, n, k);
  console.log(boundFunction()); 
  console.log(findExponent.call(null, n, k)); 
  console.log(findExponent.apply(null, [n, k]));
  