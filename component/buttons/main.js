// null, undefined, boolean, number, string, object, symbol

console.log(typeof 0)
console.log(typeof true)
console.log(typeof "Javascript")
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('JS'))
console.log(typeof null)
console.log(typeof function() {})
console.log(typeof Nan)

//Приведение типов
let language = 'Javascript'
if (language) {
    console.log('The best language is: ', language)
}

console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(0))
console.log(Boolean(1))

//строка и число

console.log(1 + "2")
console.log('' + 1 + 0)
console.log('' - 1 + 0)
console.log('3' * '8')
console.log('3' * 8)
console.log(4 + 10 + 'px')
console.log('px' + 5 + 10)
console.log('42' - 40 * 10)
console.log('42px' - 2)
console.log(null + 2)
console.log(undefined + 42)