function cariFaktorial(a) {
  // 	your code here
  let result = 1
  for(let i = 1; i<= a;i++){
    result *=i
  }
  return result
}
console.log(cariFaktorial(4))

module.exports = cariFaktorial;
