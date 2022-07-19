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

console.log('0' == false)
console.log('0' == 0)
console.log(0 === 0)

console.log(false == [])
console.log(false == '')
console.log(false == {})

let a = 42
let b = a
b++
console.log('a:', a)
console.log('b', b)

a = [1, 2, 3]
b = a
b.push(4)

let c = [1, 2, 3, 4]

console.log(a)
console.log(b)
console.log(a === b)
console.log(a === c)

function funcA() {
    let a = 1

    function funcB() {
        let b = 2

        function funcC() {
            let c = 3

            console.log('funcC:', a, b, c)
        }
        funcC()
        console.log('funcB:', a, b)
    }
    funcB()
    console.log('funcA', a)
}

funcA()

console.log(sum(1, 41))

function sum(a, b) {
    return a + b
}

let i = 42
const num = 42
console.log(num)

console.log(square(2))
var square = function(num) {
    return num ** 2
}
