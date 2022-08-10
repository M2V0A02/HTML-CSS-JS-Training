isInteger = num => num == (num ^ 0) ? true : false

console.log(isInteger(1))
console.log(isInteger(1.6))