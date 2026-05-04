function findSameInteger(a, b) {
  // your code here
  let result = []
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j] && !result.includes(a[i])) {
        result.push(a[i])
      }
    }
  }
  if(result.length === 0){
    return false
  }

  return result

}
console.log(findSameInteger([1, 2, 3, 5, 9, 12], [1, 2, 5, 10, 12]))
console.log(findSameInteger([1, 1, 1, 5, 9, 12], [1, 1, 5, 10, 12]))
module.exports = findSameInteger;
