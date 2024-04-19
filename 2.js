function getLevel(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }
  console.log(getLevel.call(null, 4)); 
  console.log(getLevel.apply(null, [5]));
  