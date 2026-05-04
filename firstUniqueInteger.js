function firstUniqueInteger(a, b) {
  // your code here
  let result = false
  for (let i = 0; i < a.length; i++) {
    let nilaiA = a[i];
    let nilaiBaru = false
    for (let j = 0; j < b.length; j++) {
      let nilaiB = b[j]
      if(nilaiA === nilaiB){
        nilaiBaru = true
        break
      }
    }
    if(!nilaiBaru){
      result = nilaiA
      return result
    }
  }
  return result
}
console.log(firstUniqueInteger([1, 2, 3, 5, 9, 12], [1, 2, 5, 10, 12]));

module.exports = firstUniqueInteger;
