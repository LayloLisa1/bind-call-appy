const obj = {a: 2, b: 3, c: 4};

function multiplyValues(n) {
  for (let key in this) {
    if (typeof this[key] === 'number') {
      this[key] *= n;
    }
  }
}
const res = {};
multiplyValues.call(obj, 3); 
console.log(obj); 
