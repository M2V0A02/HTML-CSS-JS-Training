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
console.log(false + '1')
console.log('1' + false)
console.log('1' + undefined)
console.log(undefined + '1')
console.log('a' * function(){})
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
console.log(null * 0)
console.log(1 / null)
console.log(undefined + 42)
console.log(null + null)
console.log(undefined * undefined)
console.log(null + [])

console.log('0' == false)
console.log('0' == 0)
console.log(0 === 0)

console.log(false == [])
console.log(false == '')
console.log(false == {})
console.log([1, 2, 3] == [1, 2 ,3])
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

const num = 42
console.log(num)


var square = function(num) {
    return num ** 2
}
console.log(square(2))

const PORT = 8080
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array)

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function() {
            console.log(fw.join(' '))
        },
        add: function(framework){
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()

manager.print()
manager.add('VueJS')
manager.print()

const fib = [1, 2, 3, 5, 8, 13]
/*
for (var i = 0; i < fib.length; i++){
    (function(j){
        setTimeout(function() {
            console.log(`fib[${j}] = ${fib[j]}`)
    
        }, 1500)
    })(i)
    
}
*/

let result = []
for (var i = 0; i < 5; i++) {
    ( function() {
        var j = i;
        result.push(function() {console.log(j)} )
    })()
}

result[1]()
result[2]()
result[4]()

const person = {
    surname: 'Старк',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

const john = {surname: 'Сноу' }

person.knows('все', 'Бран');
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон'])
person.knows.call(john, ...['ничего не', 'Джон'])
person.knows.bind(john, ...['ничего не', 'Джон'])()

function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}

const elena = new Person('Elena', 20)
function logThis() {
    console.log(this)
}

const obj = {num:42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

const animal = {
    legs: 4,
    logThis: function() {
        console.log(this)
    }
}

animal.logThis()

function Cat(color) {
    this.color = color
    console.log('This', this);
    ( () => console.log('Arrow this', this))()
}

new Cat('red')